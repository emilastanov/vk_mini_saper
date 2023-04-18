
export function sumArray(arr) {
    return arr.reduce((item, res) => item + res, 0);
}

export function sumTwoDimensionalArray(arr) {
    return sumArray(arr.map(item => sumArray(item)))
}
