import {UPDATE_VEHICLE_POSITION, UpdateVehiclePosition} from "../store/types/vehicle";
import ILongLat from "../types/LongLat";

export const updateVehiclePosition = (vehicle: string, pos: ILongLat): UpdateVehiclePosition => ({
    type: UPDATE_VEHICLE_POSITION,
    payload: {
        vehicle,
        position: pos
    }
});
