import { Industry } from "./industry";
import { Post } from "./post";

export interface Solicitation {
    solicitationId: string | null;
    categoryName: string;
    industry: Industry | null;
    post: Post;
    measureUnit: string | null;
    quantity: number | null;
    price: number | null;
    solicitationType: string;
    solicitationText: string | null;
    title: string;
}