import {sumArray} from "./sumArray";

export function sumTwoDimensionalArray(arr) {
    return sumArray(arr.map(item => sumArray(item)))
}
