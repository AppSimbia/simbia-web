import { PostResponse } from "../../interfaces/dtos";
import { Post } from "../../interfaces/models";
import api from "../config";

export async function getPosts(cnpj: string): Promise<Post[]> {
    const response = await api.get<PostResponse[]>(
        `/posts/list/${cnpj}`
    );

    const data = response.data;

    const posts: Post[] = [];
    data.forEach(postResponse => {
        const post: Post = {
            productCategory: {
                id: postResponse.productCategory.id,
                categoryName: postResponse.productCategory.categoryName,
                info: postResponse.productCategory.info
            },
            idIndustry: postResponse.idIndustry,
            idEmployee: postResponse.idEmployee,
            title: postResponse.title,
            description: postResponse.description,
            quantity: postResponse.quantity,
            measureUnit: postResponse.measureUnit,
            classification: postResponse.classification,
            image: postResponse.image
        };

        posts.push(post);
    });

    return posts;
}