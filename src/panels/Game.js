import React from 'react';
import { Panel, PanelHeader, PanelHeaderBack, Group, ButtonGroup, Div, Link } from '@vkontakte/vkui';

import {buttons, title, paragraph, link} from '../static/texts/aboutPanelData.js';
import panelStyle from '../styles/panelStyle.css';


const Game = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader before={<PanelHeaderBack onClick={go} data-to='home'/>}>
            Сапер
        </PanelHeader>

    </Panel>
);


export default Game;
