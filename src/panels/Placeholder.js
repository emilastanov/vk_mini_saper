import React from 'react';
import { Panel, Button, Group, ButtonGroup, Div, Link } from '@vkontakte/vkui';

import {buttons, title, paragraph} from '../static/texts/placeholderData.js';

import panelStyle from '../styles/panelStyle.css';


const Placeholder = ({ id, go }) => (
    <Panel id={id}>

        <Group>
            <Div className="container">
                <h1 className="title">{title}</h1>
                <ButtonGroup
                    style={{height: 400}}
                    className="button_container"
                    mode="vertical"
                    stretched
                >
                    <p align="justify" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    {buttons.map((
                        {
                            className,
                            text,
                            mode,
                            goTo
                        }
                    )=>(
                        <Button
                            className={className}
                            data-to={goTo}
                            onClick={go}
                            mode={mode}
                            stretched
                            size="l"
                        >
                            {text}
                        </Button>
                    ))}
                </ButtonGroup>
            </Div>
        </Group>
    </Panel>
);


export default Placeholder;
