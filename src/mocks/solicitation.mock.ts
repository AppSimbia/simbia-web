import { Solicitation } from "../interfaces/models";
import { postMock } from "./post.mock";

export const solicitationMock: Solicitation = {
    id: 1,
    industryName: "Nestlé",
    post: postMock,
    solicitationType: 'Match'
};

export const solicitationMock2: Solicitation = {
    id: 2,
    employeeName: "Marcelo Jr",
    post: postMock,
    solicitationType: "Fechamento de Match",
    paymentInfo: {
        value: 299.99,
        quantity: 160,
        paymentMethod: 'Pix'
    }
};

export const solicitationListMock: Solicitation[] = Array(20).fill(solicitationMock);

export const solicitationListMock2: Solicitation[] = [
    solicitationMock,
    solicitationMock2
];