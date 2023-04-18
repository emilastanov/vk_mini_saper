import React from "react";

import boardStyle from '../styles/boardStyle.css';
import {Flag} from "../static/icons/flag";


const Tile = ({size, state, onClick}) => (

    <div
        onClick={onClick}
        className={`board__cell ${state.checked || state.flagged? 'checked' : ''}`}
        style={{width: size, height: size}}
    >
        {state.flagged && <Flag size={size*0.6} />}
    </div>
);

export default Tile;
