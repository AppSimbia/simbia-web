import { Product } from "./product";

export interface Solicitation {
    id: number;
    employeeName?: string;
    industryName?: string;
    product: Product;
    solicitationType: 'Postagem' | 'Match' | 'Fechamento de Match';
};

export interface Solicitations {
    solicitations: Solicitation[];
};