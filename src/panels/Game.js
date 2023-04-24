import React, {useState} from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import {numberOfTilesMap, switcherSize} from "../static/texts/boardData";
import {createTiles} from "../helpers/tileHelpers";
import Switcher from "../components/Switcher";
import Board from "../components/Board";
import Popup from "../components/Popup";

import panelStyle from '../styles/panelStyle.css';


const Game = ({ id, go, deviceWidth, size, numberOfBombs, showPopup }) => {

    const boardHeight = numberOfTilesMap[size];
    const boardWidth = numberOfTilesMap[size];

    const [gameState, setGameState] = useState('IN_PROGRESS');
    const [bombsList, setBombsList] = useState(null);
    const [gameMode, setGameMode] = useState('dig');
    const [prompts, setPrompts] = useState(null);
    const [tilesState, setTilesState] = useState(
        createTiles(boardWidth, boardHeight)
    );

    return <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to='home'/>}>
            Сапер
        </PanelHeader>
        <Board
            numberOfBombs={numberOfBombs}
            setTilesState={setTilesState}
            setBombsList={setBombsList}
            setGameState={setGameState}
            deviceWidth={deviceWidth}
            setPrompts={setPrompts}
            tilesState={tilesState}
            gameState={gameState}
            bombsList={bombsList}
            showPopup={showPopup}
            gameMode={gameMode}
            prompts={prompts}
            size={size}
        />
        <Switcher state={gameMode} setState={setGameMode} size={switcherSize}/>
    </Panel>
};


export default Game;
