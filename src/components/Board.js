import React, {useEffect, useState} from "react";

import {generateBombs, generatePrompts} from "../mechanics/board";
import {calculateBoardConstants, showAds} from "../helpers/boardHelpers";
import {pushTile as pushTileMechanic} from "../mechanics/tile";
import {Popup, Tile} from "./";

import boardStyle from '../styles/boardStyle.css';


export const Board = ({
   numberOfBombs,
   setTilesState,
   setBombsList,
   setGameState,
   deviceWidth,
   clearTiles,
   setPrompts,
   tilesState,
   gameState,
   showPopup,
   bombsList,
   gameMode,
   prompts,
   bridge,
   size,
   go
}) => {

    const [isFirstClick, setFirstClickState] = useState(true);

    const {
        gap,
        gridTemplateColumns,
        sizeOfTiles,
        numberOfColumns
    } = calculateBoardConstants(size, deviceWidth);

    const clearBoard = () => {
        setFirstClickState(true);
        setGameState('IN_PROGRESS');
        setBombsList(null);
        setPrompts(null);
        clearTiles();
    }

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
            setGameState
        );
    }

    useEffect(()=>{
        if ( ["GAME_OVER", "WIN"].includes(gameState) ) {
            if (gameState === "GAME_OVER") {
                showAds(bridge).catch((e)=>{
                    console.log({ads: "showClip", e})
                });
            }
            showPopup(<Popup
                changeState={showPopup}
                gameState={gameState}
                action={clearBoard}
                go={go}
            />);
        }
    }, [gameState])


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
