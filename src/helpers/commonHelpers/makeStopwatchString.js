
export const makeStopwatchString = (value) => {
    const _value = Math.floor(value/10);

    let seconds = Math.floor(_value/100);
    const milliseconds = (_value%100).toString().padStart(2, '0')
    const minutes = Math.floor(seconds/60).toString();
    seconds = (seconds%60).toString().padStart(2, '0');
    return [minutes, seconds].join(':') + '.' + milliseconds;
};
