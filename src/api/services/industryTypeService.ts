import { IndustryTypeResponse } from "../../interfaces/dtos";
import { industryType } from "../../interfaces/models";
import api from "../config";

export async function getIndustryTypes(): Promise<industryType[]> {
    const response = await api.get<IndustryTypeResponse[]>(
        "/industries/types"
    );

    const data = response.data;
    
    let industryTypes: industryType[] = [];
    data.forEach(type => {
        const industryType: industryType = {
            id: type.id,
            industryTypeName: type.industryTypeName,
            info: type.info,
        };

        industryTypes.push(industryType);
    });

    return industryTypes;
}