import React, {useEffect, useState} from "react";

import {calculateBoardConstants, showAds} from "../helpers/boardHelpers";
import {generateBombs, generatePrompts} from "../mechanics/board";
import {pushTile as pushTileMechanic} from "../mechanics/tile";
import {Popup, Tile} from "./";

import boardStyle from '../styles/boardStyle.css';
import {registerGameEnd} from "../helpers/commonHelpers";
// import {registerUsersStep} from "../helpers/commonHelpers/registerUsersStep";


export const Board = ({
   setIsActionRegistered,
   setIsAdsLoaded,
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
    const [code, setCode] = useState('');

    const {
        gridTemplateColumns,
        numberOfColumns,
        sizeOfTiles,
        gap
    } = calculateBoardConstants(size, deviceWidth);

    const clearBoard = () => {
        setFirstClickState(true);
        setIsActionRegistered(false);
        setGameState('IN_PROGRESS');
        setIsAdsLoaded(false);
        setBombsList(null);
        setPrompts(null);
        clearTiles();
    }

    const pushTile = (tile) => {

        let _bombList = bombsList;
        let _prompts = prompts;

        const _clickList = [...clicksList, {coords: tile.coords, time: userRecord, mode: gameMode}];

        setClicksList(_clickList);

        // registerUsersStep(device, user, _bombList, _clickList, setCode, code);

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
            setClicksList([]);

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
