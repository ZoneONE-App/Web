import Vehicle from "../types/Vehicle";
import {Reducer} from "redux";
import {VehicleActionTypes} from "../store/types/vehicle";
import {LongLat} from "../types/LongLat";

export interface State {
    vehicles: {
        [id: string]: Vehicle;
    };
}

const defaultState: State = {
    vehicles: {}
};

const reducers: Reducer<State, VehicleActionTypes> = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_VEHICLE_POSITION":
            return {
                ...state,
                vehicles: {
                    ...state.vehicles,
                    [action.payload.vehicle]: {
                        ...state.vehicles[action.payload.vehicle],
                        id: action.payload.vehicle,
                        position: new LongLat(action.payload.position.longitude, action.payload.position.latitude)
                    }
                }
            };

        default:
            return state;
    }
};

export default reducers;
