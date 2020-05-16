import {useDispatch, useSelector} from "react-redux";
import React, {FC, useEffect} from "react";
import {Marker, NavigationControl} from "react-map-gl";
import {css} from "emotion";
import Map from "../Map";
import {selectVehiclesList} from "../../selectors/vehicles";
import {updateVehiclePosition} from "../../actions/actions";
import {VehicleInformation} from "../VehicleInformation";
import {DirectionsBusRounded} from "@material-ui/icons";
import {Motion, spring} from "react-motion";

export interface OverviewMapProps {
    className?: string;
}

const controlsContainerStyle = css`
    position: absolute;
    right: 1em;
    top: 1em;
`;

const OverviewMap: FC<OverviewMapProps> = props => {
    const vehicles = useSelector(selectVehiclesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateVehiclePosition("1234", {
            longitude: 153.021072,
            latitude: -27.470125
        }));
    }, [dispatch]);

    useEffect(() => {
        const timer = setInterval(() => {
            const newPos = {
                longitude: vehicles.find(v => v.id === "1234")!.position.longitude + Math.random() * .01 - .005,
                latitude: vehicles.find(v => v.id === "1234")!.position.latitude + Math.random() * .01 - .005
            };

            dispatch(updateVehiclePosition("1234", newPos));
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <div className={props.className}>
            <Map width="100%" height="100%">
                <div className={controlsContainerStyle}>
                    <NavigationControl />
                </div>

                {vehicles.map(vehicle => (
                    <Motion
                        style={{
                            long: spring(vehicle.position.longitude * 1000),
                            lat: spring(vehicle.position.latitude * 1000)
                        }}>
                        {({long, lat}) => (
                            <Marker
                                longitude={long / 1000} latitude={lat / 1000}
                                captureDrag={false}
                                key={vehicle.id}
                            >
                                <VehicleInformation
                                    icon={DirectionsBusRounded}
                                    vehicle={vehicle.id}
                                    route={/* vehicle.currentRoute.id */ "500"}
                                    suburb={/* vehicle.nextStop.suburb */ "South Bank"}
                                    delay={3}
                                />
                            </Marker>
                        )}
                    </Motion>
                ))}
            </Map>
        </div>
    );
};

export default OverviewMap;
