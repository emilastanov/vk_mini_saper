import React, {useState} from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import Board from "../components/Board";
import {numberOfTilesMap} from "../static/texts/boardData";
import {createTiles} from "../helpers/tileHelpers";

import panelStyle from '../styles/panelStyle.css';


const Game = ({ id, go, deviceWidth, size }) => {

    const boardHeight = numberOfTilesMap[size];
    const boardWidth = numberOfTilesMap[size];

    const [tilesState, setTilesState] = useState(
        createTiles(boardWidth, boardHeight)
    );
    const [bombsList, setBombsList] = useState(null);
    const [prompts, setPrompts] = useState(null);

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
            width={deviceWidth}
            prompts={prompts}
            numberOfBombs={10}
            gameMode={'dig'}
            size='s'
        />
    </Panel>
};


export default Game;
