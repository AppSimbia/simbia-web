import { PostResponse } from "../dtos";
import { Post } from "../../interfaces/models";
import api from "../config";
import { postAdapter } from "../adapters/postAdapter";

export async function getPosts(cnpj: string): Promise<Post[]> {
    const response = await api.get<PostResponse[]>(
        `/posts/list/${cnpj}`
    );

    const data = response.data;

    return data.map(postAdapter);
}