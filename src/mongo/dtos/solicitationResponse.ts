export interface SolicitationResponse {
    id: string;
    idPost: number;
    idEmployeePurchaser: number;
    idEmployeeSeller: number;
    idIndustryPurchaser: string;
    idIndustrySeller: string;
    idChat: string;
    proposedValue: number;
    quantity: number;
    measureUnit: number;
    status: string;
}