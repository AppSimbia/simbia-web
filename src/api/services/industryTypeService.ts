import { IndustryTypeResponse } from "../dtos";
import { IndustryType } from "../../interfaces/models";
import api from "../config";

export async function getIndustryTypes(): Promise<IndustryType[]> {
    const response = await api.get<IndustryTypeResponse[]>(
        "/industries/types"
    );

    const data = response.data;
    
    let industryTypes: IndustryType[] = [];
    data.forEach(type => {
        const industryType: IndustryType = {
            id: type.id,
            industryTypeName: type.industryTypeName,
            info: type.info,
        };

        industryTypes.push(industryType);
    });

    return industryTypes;
}