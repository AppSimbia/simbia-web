import { IndustryRequest, IndustryResponse } from "../dtos";
import { Industry } from "../../interfaces/models/industry";
import { LoginData } from "../../interfaces/models/loginData";
import api from "../config";
import { industryAdapter } from "../adapters/industryAdapter";

export async function signIn(loginData: LoginData): Promise<Industry> {
  const response = await api.post<IndustryResponse>(
    "/industries/login",
    {
      cnpj: loginData.cnpj,
      password: loginData.password,
    }
  );

  const industry: Industry = industryAdapter(response.data);

  return industry;
}

export async function signUp(industryRequest: IndustryRequest): Promise<Industry> {
  const response = await api.post<IndustryResponse>(
    "/industries",
    industryRequest
  );

  const registeredIndustry: Industry = industryAdapter(response.data);

  return registeredIndustry;
}