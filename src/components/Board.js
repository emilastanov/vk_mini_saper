import React, {useEffect, useState} from "react";

import {calculateBoardConstants, showAds} from "../helpers/boardHelpers";
import {generateBombs, generatePrompts} from "../mechanics/board";
import {pushTile as pushTileMechanic} from "../mechanics/tile";
import {Popup, Tile} from "./";

import boardStyle from '../styles/boardStyle.css';
import {registerGameEnd} from "../helpers/commonHelpers";


export const Board = ({
   setIsActionRegistered,
   numberOfBombs,
   setTilesState,
   setBombsList,
   setGameState,
   deviceWidth,
   clearTiles,
   setPrompts,
   tilesState,
   userRecord,
   gameState,
   showPopup,
   bombsList,
   gameMode,
   prompts,
   device,
   user,
   size,
   go
}) => {

    const [isFirstClick, setFirstClickState] = useState(true);
    const [clicksList, setClicksList] = useState([]);

    const {
        gap,
        gridTemplateColumns,
        sizeOfTiles,
        numberOfColumns
    } = calculateBoardConstants(size, deviceWidth);

    const clearBoard = () => {
        setIsActionRegistered(false);
        setFirstClickState(true);
        setGameState('IN_PROGRESS');
        setBombsList(null);
        setPrompts(null);
        clearTiles();
    }

    const pushTile = (tile) => {

        let _bombList = bombsList;
        let _prompts = prompts;

        setClicksList([...clicksList, {coords: tile.coords, time: userRecord}]);

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
                showAds().catch((e)=>{
                    console.log({ads: "showClip", e})
                });
            }
            registerGameEnd(device, user, gameState === "WIN", userRecord, size, bombsList, clicksList);
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
