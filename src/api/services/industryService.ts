import { IndustryResponse, IndustryTypeResponse } from "../dtos";
import { Industry, IndustryType } from "../../interfaces/models";
import api from "../config";
import { industryAdapter } from "../adapters/industryAdapter";
import { industryTypeAdapter } from "../adapters/industryTypeAdapter";

export async function getIndustry(cnpj: string): Promise<Industry> {
    const response = await api.get<IndustryResponse>(
        `/industries/cnpj/${cnpj}`
    );

    const industry = industryAdapter(response.data);

    return industry;
}

export async function getIndustryTypes(): Promise<IndustryType[]> {
    const response = await api.get<IndustryTypeResponse[]>(
        "/industries/types"
    );

    const data = response.data;

    const industryTypes: IndustryType[] = data.map(industryTypeAdapter);

    return industryTypes;
}

export async function updateIndustry(cnpj: string, updatedFields: Partial<Industry>): Promise<Industry> {
    const response = await api.put<Industry>(
        `/industries/${cnpj}`,
        updatedFields
    );

    return response.data;
}