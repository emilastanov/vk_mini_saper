import React, {useEffect} from 'react';

import {Label} from "./Label";

export const Stopwatch = ({value, setValue, setRecord, deviceProp, device, isActive=true}) => {

    useEffect(()=>{
        isActive && setTimeout(()=>{
            setValue(value + 1);
            deviceProp({...device, number: value + 1});
        }, 100);
    }, [value, isActive])

    const makeString = () => {
        setRecord(value);
        let seconds = Math.floor(value/10);
        const milliseconds = (value%10).toString();
        const minutes = Math.floor(seconds/60).toString();
        seconds = (seconds%60).toString().padStart(2, '0');
        return [minutes, seconds].join(':') + '.' + milliseconds;
    };

    return <Label text={makeString()}/>
};
