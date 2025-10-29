import api from "../config";

export async function getSolicitations(cnpj: string) {
    const response = await api.get(
        `/match/solicitations/${cnpj}`
    );

    return response.data;
}