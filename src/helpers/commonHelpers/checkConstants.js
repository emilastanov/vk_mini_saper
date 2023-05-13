import {numberOfBombs, numberOfTilesMap} from "../../static/texts/boardData";

export function checkConstants(size) {
    return `${size}${numberOfBombs[size]}-${numberOfTilesMap[size]}`;
}
