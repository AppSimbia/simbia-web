import { Industry, Post, Solicitation } from "../../interfaces/models";
import { MatchSolicitationResponse } from "../dtos";

export function matchSolicitationAdapter(
    matchSolicitation: MatchSolicitationResponse,
    post: Post,
    industry: Industry
): Solicitation {
    const solicitationTypeMap: Record<string, string> = {
        "POST": "Postagem",
        "AGUARDANDO_APROVACAO_CRIACAO": "Criação de Match",
        "AGUARDANDO_APROVACAO_FECHAMENTO": "Fechamento de Match"
    };

    const adaptedSolicitation: Solicitation = {
        solicitationId: matchSolicitation.id,
        categoryName: post.productCategory.categoryName,
        industry: industry,
        post: post,
        measureUnit: matchSolicitation.measureUnit,
        quantity: matchSolicitation.quantity,
        price: matchSolicitation.proposedValue,
        solicitationType: solicitationTypeMap[matchSolicitation.status],
        solicitationText: matchSolicitation.solicitationText,
        title: post.title
    };

    return adaptedSolicitation;
}