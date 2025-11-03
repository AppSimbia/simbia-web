import api from "../config";
import { SolicitationResponse } from "../dtos";

export async function getMatchSolicitations(cnpj: string): Promise<SolicitationResponse[]> {
    const response = await api.get<SolicitationResponse[]>(
        `/match/solicitations/${cnpj}`
    );

    const data = response.data;

    return data;
}

export async function acceptMatchSolicitation(idMatch: string, uidEmployeeSeller?: string) {
    const response = await api.post(
        `/match/status/${idMatch}?action=update`,
        {uidEmployeeSeller: uidEmployeeSeller}
    );

    return response.data;
}

export async function refuseMatchSolicitation(idMatch: string) {
    const response = await api.delete(
        `/match/status/${idMatch}`
    );

    return response.data;
}