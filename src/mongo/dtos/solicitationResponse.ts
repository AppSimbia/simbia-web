export interface SolicitationResponse {
    id: string;
    idPost: number;
    uidEmployeePurchaser: string | null;
    uidEmployeeSeller: string | null;
    idIndustryPurchaser: string;
    idIndustrySeller: string;
    idChat: string;
    solicitationText: string;
    proposedValue: number | null;
    quantity: number | null;
    measureUnit: string | null;
    status: string;
}