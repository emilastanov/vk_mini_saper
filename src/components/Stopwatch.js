import React, {useEffect, useState} from 'react';

import {Label} from "./Label";
import {makeStopwatchString} from "../helpers/commonHelpers/makeStopwatchString";

export const Stopwatch = ({value, setValue, setRecord, deviceProp, device, gameState, isActive=true}) => {

    const [startedTime, setStartedTime] = useState(null);

    useEffect(()=>{
        const currentTime = new Date();

        if (startedTime === null) {
            setStartedTime(currentTime);
        }
        if (isActive) {
            const newValue = currentTime - (startedTime ?? (currentTime - 1));
            setTimeout(()=>{
                deviceProp({...device, deviceId: newValue});
                setRecord(newValue);
                setValue(newValue);
            }, 10);
        }

        if (gameState === "WIN" || gameState === "GAME_OVER") {
            setStartedTime(null)
        }
    }, [value, isActive])


    const makeString = () => {
        return makeStopwatchString(value);
    };

    return <Label text={makeString()}/>
};
