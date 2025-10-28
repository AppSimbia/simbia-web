import { LocationData } from "../../interfaces/models/locationData";
import { LocationResponse } from "../dtos";

export function locationAdapter(response: LocationResponse): LocationData {
    const adaptedLocation: LocationData = {
        state: response.uf,
        city: response.localidade,
        latitude: parseFloat(response.lat),
        longitude: parseFloat(response.lon)
    }

    return adaptedLocation;
}