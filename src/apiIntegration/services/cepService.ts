import { LocationData } from "../../interfaces/models/locationData";
import { locationAdapter } from "../adapters/locationAdapter";
import api from "../config";
import { LocationResponse } from "../dtos";

export async function getLocationData(cep: string): Promise<LocationData> {
    const response = await api.get<LocationResponse>(
        `/cep/${cep}`
    );

    const data = locationAdapter(response.data);
    
    return data;
}