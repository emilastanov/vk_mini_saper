import React, {useEffect, useState} from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import {numberOfTilesMap, switcherSize} from "../static/texts/boardData";
import {Board, Switcher, LabelGroup, Label, Stopwatch, Popup} from "../components";
import {preloadAds, showBannerAds} from "../helpers/boardHelpers";
import {registerGameStart} from "../helpers/commonHelpers";
import {createTiles} from "../helpers/tileHelpers";

import panelStyle from '../styles/panelStyle.css';


const Game = ({ id, go, deviceWidth, size, numberOfBombs, showPopup, device, userId, user, deviceProp }) => {

    const boardHeight = numberOfTilesMap[size];
    const boardWidth = numberOfTilesMap[size];

    const [countOfFlaggedTiles, setCountOfFlaggedTiles] = useState(0);
    const [isActionRegistered, setIsActionRegistered] = useState(false);
    const [stopwatchValue, setStopwatchValue] = useState(0);
    const [isAdsLoaded, setIsAdsLoaded] = useState(false);
    const [gameState, setGameState] = useState('IN_PROGRESS');
    const [bombsList, setBombsList] = useState(null);
    const [gameMode, setGameMode] = useState('dig');
    const [userRecord, setUserRecord] = useState(0);
    const [prompts, setPrompts] = useState(null);
    const [tilesState, setTilesState] = useState(
        createTiles(boardWidth, boardHeight)
    );

    const clearTiles = () => {
        setTilesState(createTiles(boardWidth, boardHeight));
        setStopwatchValue(0);
    };

    const continueGame = () => {
        setGameState('IN_PROGRESS');
    }

    const handleGoBack = (e) => {
        if (gameState === 'IN_PROGRESS') {
            setGameState("PAUSE");
            showPopup(
                <Popup
                    changeState={showPopup}
                    gameState={"PAUSE"}
                    action={continueGame}
                    go={go}
                />
            );
        } else {
            go(e);
        }
    };

    useEffect(()=>{
        const calculateCountOfFlaggedTiles = () => {
            return tilesState.reduce((flaggedTiles, tile)=>(flaggedTiles + (tile.flagged ? 1 : 0)), 0)
        };

        const handlePreloadAds = () => {

            preloadAds().then((data)=>{
                data.result && setIsAdsLoaded(true);
            }).catch((e)=>{
                console.log({ads: "preloadClip", e})
            });

            showBannerAds()
                .catch((e)=>{
                console.log({ads: "showBanner", e})
            });
        };

        !isAdsLoaded && handlePreloadAds();
        !isActionRegistered && registerGameStart(device, userId, setIsActionRegistered);
        setCountOfFlaggedTiles(calculateCountOfFlaggedTiles());
    }, [tilesState, isAdsLoaded, isActionRegistered]);

    return <Panel id={id} style={{position: 'fixed'}}>
        <PanelHeader before={<PanelHeaderBack onClick={handleGoBack} data-to="home" />}>
            Сапер
        </PanelHeader>
        <LabelGroup align="horizontal" style={{marginTop: 25}}>
            <Label text={`${countOfFlaggedTiles}/${numberOfBombs}`} />
            <Stopwatch
                isActive={gameState === 'IN_PROGRESS'}
                setValue={setStopwatchValue}
                setRecord={setUserRecord}
                deviceProp={deviceProp}
                value={stopwatchValue}
                device={device}
            />
        </LabelGroup>
        <Board
            setIsActionRegistered={setIsActionRegistered}
            numberOfBombs={numberOfBombs}
            setTilesState={setTilesState}
            setBombsList={setBombsList}
            setGameState={setGameState}
            deviceWidth={deviceWidth}
            clearTiles={clearTiles}
            setPrompts={setPrompts}
            tilesState={tilesState}
            userRecord={userRecord}
            gameState={gameState}
            bombsList={bombsList}
            showPopup={showPopup}
            gameMode={gameMode}
            prompts={prompts}
            device={device}
            user={user}
            size={size}
            go={go}
        />
        <Switcher
            setState={setGameMode}
            size={switcherSize}
            state={gameMode}
        />
    </Panel>
};

export default Game;
