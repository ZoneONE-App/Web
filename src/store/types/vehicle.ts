import ILongLat from "../../types/LongLat";
import {Action} from "redux";

export const UPDATE_VEHICLE_POSITION = "UPDATE_VEHICLE_POSITION";

export interface UpdateVehiclePosition extends Action<typeof UPDATE_VEHICLE_POSITION> {
    payload: {
        vehicle: string;
        position: ILongLat;
    }
}

export type VehicleActionTypes = UpdateVehiclePosition;
