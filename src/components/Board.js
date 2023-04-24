import React, {useEffect, useState} from "react";

import {generateBombs, generatePrompts} from "../mechanics/board";
import {calculateBoardConstants} from "../helpers/boardHelpers";
import {pushTile as pushTileMechanic} from "../mechanics/tile";
import Popup from "./Popup";
import Tile from "./Tile";

import boardStyle from '../styles/boardStyle.css';


const Board = ({
   numberOfBombs,
   setTilesState,
   setBombsList,
   setGameState,
   deviceWidth,
   setPrompts,
   tilesState,
   gameState,
   showPopup,
   bombsList,
   gameMode,
   prompts,
   size
}) => {

    const [isFirstClick, setFirstClickState] = useState(true);

    const {
        gap,
        gridTemplateColumns,
        sizeOfTiles,
        numberOfColumns
    } = calculateBoardConstants(size, deviceWidth);

    useEffect(()=>{
        if (gameState === 'WIN') {
            showPopup(<Popup
                changeState={showPopup}
                text={'WIN'}
            />);
        } else if (gameState === 'GAME_OVER') {
            showPopup(<Popup
                changeState={showPopup}
                text={'LOSE'}
            />);
        }
    }, [gameState])


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

        if (gameState !== 'IN_PROGRESS') {
            return;
        }

        pushTileMechanic(
            _bombList,
            gameMode,
            _prompts,
            tile,
            tilesState,
            setTilesState,
            setGameState,
            gameState,
            showPopup
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
