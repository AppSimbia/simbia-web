import { Payment } from "./payment";
import { Post } from "./post";

export interface Solicitation {
    id: number;
    employeeName?: string;
    industryName?: string;
    post: Post;
    solicitationType: 'Postagem' | 'Match' | 'Fechamento de Match';
    paymentInfo?: Payment
};