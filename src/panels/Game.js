import React, {useState} from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import Board from "../components/Board";
import {numberOfTilesMap} from "../static/texts/boardData";
import {createTiles} from "../helpers/tileHelpers";

import panelStyle from '../styles/panelStyle.css';


const Game = ({ id, go, deviceWidth, size, numberOfBombs }) => {

    const boardHeight = numberOfTilesMap[size];
    const boardWidth = numberOfTilesMap[size];

    const [bombsList, setBombsList] = useState(null);
    const [prompts, setPrompts] = useState(null);
    const [tilesState, setTilesState] = useState(
        createTiles(boardWidth, boardHeight)
    );

    return <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to='home'/>}>
            Сапер
        </PanelHeader>
        <Board
            setTilesState={setTilesState}
            setBombsList={setBombsList}
            setPrompts={setPrompts}
            tilesState={tilesState}
            bombsList={bombsList}
            deviceWidth={deviceWidth}
            prompts={prompts}
            numberOfBombs={numberOfBombs}
            gameMode={'dig'}
            size={size}
        />
    </Panel>
};


export default Game;
