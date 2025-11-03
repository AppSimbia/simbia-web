import { Solicitation } from "../../interfaces/models";
import { getMatchSolicitations } from "../../mongo/services/solicitationService";
import { matchSolicitationAdapter } from "../adapters/matchSolicitationAdapter";
import { postSolicitationAdapter } from "../adapters/solicitationAdapter";
import api from "../config";
import { MatchSolicitationResponse, PostSolicitationResponse } from "../dtos";
import { getIndustry } from "./industryService";
import { getPost } from "./postService";

export async function getAllSolicitations(cnpj: string): Promise<Solicitation[]> {
    const solicitations: Solicitation[] = [];

    const solicitationsInfo: MatchSolicitationResponse[] = await getMatchSolicitations(cnpj);

    const matchPromises = solicitationsInfo.map(async (s) => {
        const post = await getPost(s.idPost);
        const industry = await getIndustry(s.idIndustryPurchaser);
        return matchSolicitationAdapter(s, post, industry);
    });

    const matchResults = await Promise.all(matchPromises);
    solicitations.push(...matchResults);

    const response = await api.post<PostSolicitationResponse[]>(
        "/solicitations",
        { cnpjIndustry: cnpj, solicitations: [] }
    );

    const data = response.data;

    const postPromises = data.map(async (s) => {
        const post = await getPost(s.idPost);
        return postSolicitationAdapter(s, post);
    });

    const postResults = await Promise.all(postPromises);
    solicitations.push(...postResults);

    return solicitations;
}

export async function acceptPostSolicitation(idPost: number) {
    const response = await api.put(
        `/posts/${idPost}`,
        {"status": "2"}
    );

    return response.data;
}

export async function refusePostSolicitation(idPost: number) {
    const response = await api.delete(
        `/posts/${idPost}`
    );

    return response.data;
}