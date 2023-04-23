import React, {useEffect, useState} from "react";

import {pushTile as pushTileMechanic} from "../mechanics/tile";
import {calculateBoardConstants} from "../helpers/boardHelpers";

import Tile from "./Tile";

import {generateBombs, generatePrompts} from "../mechanics/board";

import boardStyle from '../styles/boardStyle.css';


const Board = ({
    numberOfBombs,
    setTilesState,
    setBombsList,
    setGameState,
    setPrompts,
    tilesState,
    gameState,
    gameMode,
    bombsList,
    prompts,
    deviceWidth,
    size
}) => {

    const [isFirstClick, setFirstClickState] = useState(true);

    const {
        gap,
        gridTemplateColumns,
        sizeOfTiles,
        numberOfColumns
    } = calculateBoardConstants(size, deviceWidth);


    const pushTile = (tile) => {

        let _bombList = bombsList;
        let _prompts = prompts;

        if (isFirstClick) {
            _bombList = generateBombs(tile.coords, numberOfBombs, numberOfColumns);
            _prompts = generatePrompts(_bombList, numberOfColumns);

            setFirstClickState(false);
            setBombsList(_bombList);
            setPrompts(_prompts);
        }

        pushTileMechanic(
            _bombList,
            gameMode,
            _prompts,
            tile,
            tilesState,
            setTilesState,
            setGameState,
            gameState
        );
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
