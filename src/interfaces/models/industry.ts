import { industryType } from "./industryType";

export interface Industry {
    id: number;
    name: string;
    imgUrl: string;
    cnpj: string;
    industryType: industryType;
    description: string;
    plan: string;
    email: string;
    cep: string;
    state: string;
    city: string;
};