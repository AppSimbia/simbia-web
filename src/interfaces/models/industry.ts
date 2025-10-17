import { Product } from "./product";

export interface Industry {
    name: string;
    imgUrl: string;
    cnpj: string;
    industryType: string;
    description: string;
    email: string;
    cep: string;
    state: string;
    city: string;
    posts?: Product[];
};