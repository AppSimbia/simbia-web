import { IndustryType } from "./industryType";

export interface Industry {
    id: number;
    name: string;
    imgUrl: string;
    cnpj: string;
    industryType: IndustryType;
    description: string;
    plan: string;
    email: string;
    cep: string;
    state: string;
    city: string;
};