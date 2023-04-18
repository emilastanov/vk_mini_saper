import React from "react";

import boardStyle from '../styles/boardStyle.css';
import {numberOfTilesMap, sizeOfTileMap, tilesGap} from "../static/texts/boardData";
import Tile from "./Tile";

const Board = ({size, state, width}) => {
    const numberOfColumns = numberOfTilesMap[size];
    const numberOfTiles = numberOfColumns**2;
    const deviceScale =
         width /
        (sizeOfTileMap[size]*numberOfColumns +
            tilesGap*(numberOfColumns - 1) + 50);
    const sizeOfTiles = sizeOfTileMap[size] * deviceScale;
    const gap = tilesGap * deviceScale;



    const gridTemplateColumns = (
        Array(numberOfColumns).fill().map(_ => (`${sizeOfTiles}px`))
    ).join(' ')

    const tiles = [];
    for (let i = 0; i < numberOfTiles; i++) {
        tiles.push(<Tile size={sizeOfTiles}/>)
    }

    return <div
        className="board"
        style={{
            gridTemplateColumns,
            gap
        }}
    >
        {tiles}
    </div>
};

export default Board;
