import {createSelector} from "reselect";
import {State} from "../reducers/reducers";

const selectVehicles = (state: State) => state.vehicles;

export const selectVehiclesList = createSelector(
    selectVehicles,
    vehicles => Array.from(Object.values(vehicles))
);
