import { Post } from "../../interfaces/models";
import { PostResponse } from "../dtos";

export function postAdapter(response: PostResponse): Post {
    const classificationMap: Record<string, string> = {
        "1": "Perigoso",
        "2": "Perigoso Não Inerte",
        "3": "Perigoso Inerte"
    };

    const measureUnitMap: Record<string, string> = {
        "1": "Kg",
        "2": "L",
        "3": "M",
        "4": "Unidades"
    };

    const adaptedPost: Post = {
        idPost: response.idPost,
        productCategory: {
            id: response.productCategory.id,
            categoryName: response.productCategory.categoryName,
            info: response.productCategory.info
        },
        industryName: response.industryName,
        industryImage: response.industryImage,
        industryCnpj: response.industryCnpj,
        employeeName: response.employeeName,
        title: response.title,
        description: response.description,
        quantity: response.quantity,
        measureUnit: measureUnitMap[response.measureUnit],
        classification: classificationMap[response.classification],
        image: response.image,
        publicationDate: response.publicationDate
    };

    return adaptedPost;
}