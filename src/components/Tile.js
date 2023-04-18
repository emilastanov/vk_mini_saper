import React from "react";

import boardStyle from '../styles/boardStyle.css';


const Tile = ({size, state}) => (

    <div className="board__cell" style={{width: size, height: size}}>

    </div>
);

export default Tile;
