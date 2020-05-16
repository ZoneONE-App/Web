import {createStore} from "redux";
import reducers from "../reducers/reducers";
import {updateVehiclePosition} from "../actions/actions";

export const store = createStore(
    reducers,

    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
        {
            name: "ZoneONE",
            actionCreators: {
                updateVehiclePosition
            },
        }
    )
);
