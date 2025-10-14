import { Payment } from "./Payment";
import { Product } from "./product";

export interface Solicitation {
    id: number;
    employeeName?: string;
    industryName?: string;
    product: Product;
    solicitationType: 'Postagem' | 'Match' | 'Fechamento de Match';
    paymentInfo?: Payment
};

export interface Solicitations {
    solicitations: Solicitation[];
};