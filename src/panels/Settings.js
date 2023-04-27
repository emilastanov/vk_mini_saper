import React from 'react';

import {Panel, FormLayout, FormItem, Group, Radio, Div, Button, ButtonGroup} from '@vkontakte/vkui';

import {radioButtons, title, buttons} from "../static/texts/settingsPanelData";

import panelStyle from '../styles/panelStyle.css';


const Settings = ({ id, go, level, changeLevel }) => {

    const setLevel = (e) => {
        changeLevel(e.target.value);
    }

    return <Panel id={id}>
        <Group>
            <Div className="container">
                <h1 className="title">{title}</h1>
                <FormLayout>
                    <FormItem top="Сложность игры" onChange={setLevel}>
                        {radioButtons.map((button, key) => (
                            <Radio
                                checked={level === button.value}
                                description={button.description}
                                value={button.value}
                                name="radio"
                                key={key}
                            >
                                {button.text}
                            </Radio>
                        ))}
                    </FormItem>
                </FormLayout>
                <ButtonGroup
                    mode="vertical"
                    className="button_container"
                    style={{marginTop: 50}}
                    stretched
                >
                    {buttons.map(({
                                      className,
                                      text,
                                      mode,
                                      goTo
                                  }) => (
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
};


export default Settings;
