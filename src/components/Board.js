import React, {useEffect, useState} from "react";

import {numberOfTilesMap, sizeOfTileMap, tilesGap} from "../static/texts/boardData";
import {pushTile as pushTileMechanic} from "../mechanics/tile";
import {makeBoardConstants} from "../helpers/boardHelpers";

import Tile from "./Tile";

import boardStyle from '../styles/boardStyle.css';
import {generateBombs, generatePrompts} from "../mechanics/board";


const Board = ({
    numberOfBombs,
    setTilesState,
    setBombsList,
    setPrompts,
    tilesState,
    gameMode,
    bombsList,
    prompts,
    width,
    size
}) => {

    useEffect(()=>{
        bombsList && (()=>{
            setPrompts(generatePrompts(bombsList, numberOfColumns));
        })()
    }, [bombsList])

    const [isFirstClick, setFirstClickState] = useState(true);

    const {gap, gridTemplateColumns, sizeOfTiles, numberOfColumns} = makeBoardConstants(size, width);


    const pushTile = (tile) => {
        isFirstClick && (() => {
            setBombsList(generateBombs(tile.coords, numberOfBombs, numberOfColumns));
            setFirstClickState(false);
        })()

        pushTileMechanic(
            bombsList,
            gameMode,
            prompts,
            tile,
            tilesState,
            setTilesState
        )
    }


    return <div className="board" style={{gridTemplateColumns, gap}}>
        {tilesState.map(tile=>(
            <Tile
                onClick={()=>pushTile(tile)}
                size={sizeOfTiles}
                state={tile}
            />
        ))}
    </div>
};

export default Board;
