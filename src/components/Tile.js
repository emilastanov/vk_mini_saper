import React from "react";

import {getTileTextColor} from "../helpers/tileHelpers";
import {Flag} from "../static/icons/flag";
import {Bomb} from "../static/icons/bomb";

import boardStyle from '../styles/boardStyle.css';


const Tile = ({size, state, onClick}) => (

    <div
        style={{width: size, height: size, fontSize: size*0.5, color: getTileTextColor(state.prompt)}}
        className={`board__cell ${(state.checked && 'checked') || (state.flagged && 'flagged')}`}
        onClick={onClick}
    >
        {state.exploded && <Bomb size={size*0.5} />}
        {state.flagged && <Flag size={size*0.5} />}
        {state.prompt === 0? '' : state.prompt}
    </div>
);

export default Tile;
