import { Solicitation } from "../interfaces/models";
import { productMock } from "./product.mock";

export const solicitationMock: Solicitation = {
    id: 1,
    employeeName: "Marcelo Jr",
    product: productMock,
    solicitationType: "Fechamento de Match"
};

export const solicitationListMock: Solicitation[] = Array(20).fill(solicitationMock);

export const solicitationListMock2: Solicitation[] = [
    solicitationMock,
    {
        id: 2,
        industryName: "Nestlé",
        product: productMock,
        solicitationType: 'Match'
    }
];