import { Solicitation } from "../../interfaces/models";
import { getMatchSolicitations } from "../../mongo/services/solicitationService";
import { matchSolicitationAdapter } from "../adapters/matchSolicitationAdapter";
import { postSolicitationAdapter } from "../adapters/solicitationAdapter";
import api from "../config";
import { MatchSolicitationResponse, PostSolicitationResponse } from "../dtos";
import { getIndustry } from "./industryService";
import { getPost } from "./postService";

export async function getAllSolicitations(
    cnpj: string,
): Promise<Solicitation[]> {
    const solicitations: Solicitation[] = [];

    const solicitationsInfo: MatchSolicitationResponse[] = await getMatchSolicitations(cnpj);
    solicitationsInfo.forEach(async (s) => {
        const post = await getPost(s.idPost);
        const industry = await getIndustry(s.idIndustryPurchaser);

        const solicitation: Solicitation = matchSolicitationAdapter(s, post, industry);
        solicitations.push(solicitation);
    });
    
    const response = await api.post<PostSolicitationResponse[]>(
        "/solicitations",
        {
            cnpjIndustry: cnpj,
            solicitations: []
        }
    );

    const data = response.data;

    data.forEach(async (s) => {
        const post = await getPost(s.idPost);
        

        const solicitation = postSolicitationAdapter(s, post);
        solicitations.push(solicitation);
    });

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