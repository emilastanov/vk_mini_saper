import React from 'react';
import {Panel, PanelHeader, PanelHeaderBack, Group, ButtonGroup, Div, Link, Button} from '@vkontakte/vkui';

import {buttons, title, paragraph, link} from '../static/texts/aboutPanelData.js';
import panelStyle from '../styles/panelStyle.css';


const Settings = ({ id, go }) => (
    <Panel id={id}>
        <ButtonGroup
            mode="vertical"
            stretched
        >
            <Button

                data-to='home'
                onClick={go}
                mode='secondary'
                stretched
                size="l"
            >
                ok
            </Button>
        </ButtonGroup>

    </Panel>
);


export default Settings;
