import React, {useEffect} from 'react';

import {Label} from "./Label";
import {makeStopwatchString} from "../helpers/commonHelpers/makeStopwatchString";

export const Stopwatch = ({value, setValue, setRecord, deviceProp, device, isActive=true}) => {

    useEffect(()=>{
        isActive && setTimeout(()=>{
            setValue(value + 1);
            deviceProp({...device, deviceId: value + 1});
        }, 100);
    }, [value, isActive])

    const makeString = () => {
        setRecord(value + 1);
        return makeStopwatchString(value);
    };

    return <Label text={makeString()}/>
};
