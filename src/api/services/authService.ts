import { IndustryResponse } from "../../interfaces/dtos";
import { Industry } from "../../interfaces/models/industry";
import { LoginData } from "../../interfaces/models/loginData";
import api from "../config";

export async function login({ cnpj, password }: LoginData): Promise<Industry> {
    const response = await api.post<IndustryResponse>(
      "/industries/login",
      {},
      {
        params: {
          username: cnpj,
          password: password,
        },
      }
    );
  
    const data = response.data;

    const filteredData: Industry = {
        name: data.industryName,
        imgUrl: data.image,
        cnpj: data.cnpj,
        industryType: data.industryType.industryTypeName,
        description: data.description,
        plan: data.plan.planName,
        email: data.contactMail,
        cep: data.cep,
        state: data.state,
        city: data.city
    };

    return filteredData;
}