import React, {useState} from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import Board from "../components/Board";
import {numberOfTilesMap} from "../static/texts/boardData";
import {createTiles} from "../mechanics/tile";

import panelStyle from '../styles/panelStyle.css';


const Game = ({ id, go, deviceWidth, size }) => {

    const boardHeight = numberOfTilesMap[size];
    const boardWidth = numberOfTilesMap[size];

    const [tilesState, setTilesState] = useState(
        createTiles(boardWidth, boardHeight)
    );

    return <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to='home'/>}>
            Сапер
        </PanelHeader>
        <Board
            setTilesState={setTilesState}
            tilesState={tilesState}
            width={deviceWidth}
            gameMode={'flag'}
            size='s'
        />
    </Panel>
};


export default Game;
