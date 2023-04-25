import React, {useEffect} from 'react';

import {Label} from "./Label";

export const Stopwatch = ({value, setValue, isActive=true}) => {

    useEffect(()=>{
        isActive && setTimeout(()=>{
            setValue(value + 1);
        }, 1000);
    }, [value, isActive])

    const makeString = () => {
        const minutes = Math.floor(value/60).toString();
        const seconds = (value%60).toString().padStart(2, '0');
        return [minutes, seconds].join(':');
    };

    return <Label text={makeString()}/>
};
