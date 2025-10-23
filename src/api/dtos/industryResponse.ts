export interface IndustryTypeResponse {
    id: number;
    industryTypeName: string;
    info: string;
    active: string;
}

export interface PlanResponse {
    id: number;
    planName: string;
    price: number;
    active: string;
}
  
export interface LoginInfoResponse {
    id: number;
    username: string;
    pwdUUID: string;
}

export interface IndustryResponse {
    industryType: IndustryTypeResponse;
    plan: PlanResponse;
    login: LoginInfoResponse;
    cnpj: string;
    industryName: string;
    description: string;
    contactMail: string;
    cep: string;
    city: string;
    state: string;
    image: string;
}