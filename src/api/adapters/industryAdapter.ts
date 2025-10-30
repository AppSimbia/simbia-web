import { Industry } from "../../interfaces/models";
import { IndustryResponse } from "../dtos";

export function industryAdapter(industryResponse: IndustryResponse): Industry {
    const adaptedIndustry: Industry = {
    id: industryResponse.login.id,
    name: industryResponse.industryName,
    cnpj: industryResponse.cnpj,
    industryType: {
        id: industryResponse.industryType.id,
        industryTypeName: industryResponse.industryType.industryTypeName,
        info: industryResponse.industryType.info
    },
    description: industryResponse.description,
    plan: industryResponse.plan.planName,
    email: industryResponse.contactMail,
    cep: industryResponse.cep,
    state: industryResponse.state,
    latitude: industryResponse.latitude,
    longitude: industryResponse.longitude,
    city: industryResponse.city,
    image: industryResponse.image,
  };

  return adaptedIndustry;
}