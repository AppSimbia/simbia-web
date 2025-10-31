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

export async function getFeed(cnpj: string): Promise<Post[]> {
    const response = await api.get<PostResponse[]>(
        `/posts/list/${cnpj}/except`
    );

    const data = response.data;

    return data.map(postAdapter);
}

export async function approvePostSolicitation(postId: number): Promise<boolean> {
    const response = await api.put<Post>(
        `/posts/${postId}`,
        {status: "2"}
    );

    const data = response.data;

    return data.status === "2";
}

export async function refusePostSolicitation(postId: number): Promise<boolean> {
    const response = await api.put<Post>(
        `/posts/${postId}`,
        {status: "3"}
    );

    const data = response.data;

    return data.status === "3";
}