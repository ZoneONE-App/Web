import {SvgIconComponent} from "@material-ui/icons";
import React, {FC} from "react";
import {css, cx} from "emotion";
import "easings/index.css";
import "@openfonts/fira-sans_latin";

export interface VehicleInformationProps {
    icon: SvgIconComponent;

    vehicle: string;

    route: string;
    suburb: string;
    delay: number;

    className?: string;
}

const vehicleInfoStyle = css`
    transition: 600ms var(--ease-out-quint);
    overflow: hidden;
    border-radius: .75em;

    font-size: 1em;

    font-family: "Fira Sans", sans-serif;

    display: flex;
    justify-content: start;
    align-items: center;

    background: white;
    box-shadow: 1px 1px 1px #0008;

    width: 1.5em;
    height: 1.5em;

    padding: .25em;

    .icon {
        font-size: 1em;
    }

    .children {
        grid-column: 2;
        transition: 600ms var(--ease-out-quint);

        font-size: .8em;
        color: #666;
        opacity: 0;

        white-space: nowrap;

        margin-left: .5em;

        span {
            display: block;
            line-height: 1;

            strong {
                color: black;
            }
        }

        .delay {
            font-size: .9em;
        }
    }

    &.focused,
    &:hover,
    &:focus {
        border-radius: .25em;

        width: 7em;
        height: 3em;
        margin-top: calc(-3em / 4);

        .icon {
            margin-top: 0;
        }

        .children {
            display: block;
            opacity: 1;
        }
    }
`;

export const VehicleInformation: FC<VehicleInformationProps> = props => {
    const {icon: Icon} = props;

    return (
        <div className={cx(vehicleInfoStyle, props.className)}>
            <Icon className="icon" />
            <div className="children">
                <span><strong>{props.route}</strong> / {props.vehicle}</span>
                <span>{props.suburb}</span>
                <span className="delay">{props.delay} min late</span>
            </div>
        </div>
    );
};
