import { IndustryType } from "../../interfaces/models";
import { IndustryTypeResponse } from "../dtos";

export function industryTypeAdapter(industryTypeResponse: IndustryTypeResponse): IndustryType {
    const adaptedIndustryType: IndustryType = {
        id: industryTypeResponse.id,
        industryTypeName: industryTypeResponse.industryTypeName,
        info: industryTypeResponse.info,
    };

    return adaptedIndustryType;
}