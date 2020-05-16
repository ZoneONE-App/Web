import "ress";
import React, {FC} from "react";
import OverviewMap from "./maps/OverviewMap";
import {css} from "emotion";

const appStyle = css`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-areas: "nav nav" "map nfo";
    grid-template-columns: 1fr 30em;
    grid-template-rows: 3em 1fr;
`;

const overviewMapStyle = css`
    grid-area: map;
`;

const App: FC = () => (
    <div className={appStyle}>
        <OverviewMap className={overviewMapStyle} />
    </div>
);

export default App;
