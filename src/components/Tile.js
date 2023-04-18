import React from "react";

import {Flag} from "../static/icons/flag";
import {getTileTextColor} from "../helpers/tileHelpers";

import boardStyle from '../styles/boardStyle.css';


const Tile = ({size, state, onClick}) => (

    <div
        onClick={onClick}
        className={`board__cell ${state.checked || state.flagged? 'checked' : ''}`}
        style={{width: size, height: size, fontSize: size*0.5, color: getTileTextColor(state.prompt)}}
    >
        {state.flagged && <Flag size={size*0.5} />}
        {state.prompt === 0? '' : state.prompt}
    </div>
);

export default Tile;
