import { IndustryRequest, IndustryResponse } from "../dtos";
import { Industry } from "../../interfaces/models/industry";
import { LoginData } from "../../interfaces/models/loginData";
import api from "../config";

export async function signIn(loginData: LoginData): Promise<Industry> {
  const response = await api.post<IndustryResponse>(
    "/industries/login",
    {
      cnpj: loginData.cnpj,
      password: loginData.password,
    }
  );

  const data = response.data;

  const industry: Industry = {
    id: data.login.id,
    name: data.industryName,
    cnpj: data.cnpj,
    industryType: {
      id: data.industryType.id,
      industryTypeName: data.industryType.industryTypeName,
      info: data.industryType.info
    },
    description: data.description,
    plan: data.plan.planName,
    email: data.contactMail,
    cep: data.cep,
    state: data.state,
    latitude: data.latitude,
    longitude: data.longitude,
    city: data.city,
    image: data.image,
  };

  return industry;
}

export async function signUp(industryRequest: IndustryRequest): Promise<Industry> {
  const response = await api.post<IndustryResponse>(
    "/industries",
    industryRequest
  );

  const data = response.data;

  const registeredIndustry: Industry = {
    id: data.login.id,
    name: data.industryName,
    cnpj: data.cnpj,
    industryType: {
      id: data.industryType.id,
      industryTypeName: data.industryType.industryTypeName,
      info: data.industryType.info
    },
    description: data.description,
    plan: data.plan.planName,
    email: data.contactMail,
    cep: data.cep,
    state: data.state,
    latitude: data.latitude,
    longitude: data.longitude,
    city: data.city,
    image: data.image,
  };

  return registeredIndustry;
}