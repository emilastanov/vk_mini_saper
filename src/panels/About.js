import React from 'react';
import { Panel, Button, Group, ButtonGroup, Div, Link } from '@vkontakte/vkui';

import {buttons, title, paragraph, link, version} from '../static/texts/aboutPanelData.js';

import panelStyle from '../styles/panelStyle.css';


const About = ({ id, go }) => (
    <Panel id={id}>

        <Group>
            <Div className="container">
                <h1 className="title">{title}</h1>
                <h3 className="version">{version}</h3>
                <ButtonGroup
                    style={{height: 400}}
                    className="button_container"
                    mode="vertical"
                    stretched
                >
                    <p align="justify" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    <p align="center" style={{width: '100%', margin: 0}}>
                        <Link href={link.href}>{link.text}</Link>
                    </p>
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


export default About;
