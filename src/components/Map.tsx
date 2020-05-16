import React, {FC, useCallback, useState} from "react";
import ReactMapGL, {
    ContextViewportChangeHandler,
    ViewportProps
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"
import {easeCubicOut} from "d3-ease";

// <MapBoxGlLayer accessToken="pk.eyJ1IjoiYWxkdWlubyIsImEiOiJjazl5NjBybzEwcnFiM2xta2QxbWVidGt4In0.eaUSl8KkVrAHymGT-RwJyw" style="mapbox://styles/alduino/ck9y6d81i03r11iqpc62gi3cj" />

export interface MapProps {
    width: number | string;
    height: number | string;

    minZoom?: number;
    maxZoom?: number;

    className?: string;

    onViewportChange?: ContextViewportChangeHandler;
}

const Map: FC<MapProps> = props => {
    const {onViewportChange} = props;

    const [viewport, setViewport] = useState<ViewportProps>({
        latitude: -27.467778,
        longitude: 153.028056,
        altitude: 1.5,
        bearing: 0,
        pitch: 0,
        minPitch: 0,
        maxPitch: 60,
        zoom: 13,
        maxZoom: 18,
        minZoom: 10,
        width: -1,
        height: -1,
    });

    const handleViewportChange = useCallback<ContextViewportChangeHandler>((viewport, interationState, oldViewport) => {
        setViewport(old => ({
            ...viewport,

            // These get overwritten by some controls
            minPitch: old.minPitch,
            maxPitch: old.maxPitch,
            minZoom: old.minZoom,
            maxZoom: old.maxZoom
        }));
        if (onViewportChange) onViewportChange(viewport, interationState, oldViewport);
    }, [onViewportChange]);

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/alduino/ck9y6d81i03r11iqpc62gi3cj"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            {...viewport}
            {...props}
            transitionEasing={easeCubicOut}
            onViewportChange={handleViewportChange}
        />
    );
};

export default Map;
