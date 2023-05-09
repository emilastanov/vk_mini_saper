
export const makeStopwatchString = (value) => {
    let seconds = Math.floor(value/10);
    const milliseconds = (value%10).toString();
    const minutes = Math.floor(seconds/60).toString();
    seconds = (seconds%60).toString().padStart(2, '0');
    return [minutes, seconds].join(':') + '.' + milliseconds;
};
