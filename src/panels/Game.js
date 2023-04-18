import React from 'react';
import { Panel, PanelHeader, PanelHeaderBack, Group, ButtonGroup, Div, Link } from '@vkontakte/vkui';

import {buttons, title, paragraph, link} from '../static/texts/aboutPanelData.js';
import panelStyle from '../styles/panelStyle.css';
import Board from "../components/Board";


const Game = ({ id, go, deviceWidth }) => (
    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to='home'/>}>
            Сапер
        </PanelHeader>
        <Board size='s' width={deviceWidth}/>
    </Panel>
);


export default Game;
