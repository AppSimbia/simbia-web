import { Industry, Post, Solicitation } from "../../interfaces/models";
import { PostSolicitationResponse } from "../dtos";

export function postSolicitationAdapter(
    postSolicitationResponse: PostSolicitationResponse,
    post: Post,
): Solicitation {
    const solicitationTypeMap: Record<string, string> = {
        "POST": "Postagem",
        "AGUARDANDO_APROVACAO_CRIACAO": "Criação de Match",
        "AGAURDANDO_APROVACAO_FECHAMENTO": "Fechamento de Match"
    };

    const adaptedSolicitation: Solicitation = {
        solicitationId: null,
        categoryName: post.productCategory.categoryName,
        industry: null,
        post: post,
        measureUnit: post.measureUnit,
        quantity: post.quantity,
        price: post.price,
        solicitationType: solicitationTypeMap[postSolicitationResponse.solicitationType],
        solicitationText: null,
        title: postSolicitationResponse.title,
    };

    return adaptedSolicitation;
}