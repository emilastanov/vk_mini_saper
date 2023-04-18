import React from "react";

import {numberOfTilesMap, sizeOfTileMap, tilesGap} from "../static/texts/boardData";
import {pushTile, tilesStateUpdater} from "../mechanics/tile";
import {makeBoardConstants} from "../helpers/boardHelpers";

import Tile from "./Tile";

import boardStyle from '../styles/boardStyle.css';


const Board = ({size, tilesState, width, gameMode, setTilesState}) => {
    const {gap, gridTemplateColumns, sizeOfTiles} = makeBoardConstants(size, width);
    const tsu = tilesStateUpdater(tilesState, setTilesState);


    return <div className="board" style={{gridTemplateColumns, gap}}>
        {tilesState.map(tile=>(
            <Tile
                onClick={()=>pushTile(
                    gameMode,
                    tile,
                    tsu
                )}
                size={sizeOfTiles}
                state={tile}
            />
        ))}
    </div>
};

export default Board;
