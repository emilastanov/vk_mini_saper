import {getTileIndex} from "../../helpers/tileHelpers/getTileIndex";

export function explodeBombs(bombList, tiles) {
    const opTilesState = [...tiles];

    for (let x = 0; x < bombList.length; x++) {
        for (let y = 0; y < bombList[x].length; y++) {
            const tileIndex = getTileIndex({x, y}, opTilesState);
            opTilesState[tileIndex].exploded = !!bombList[x][y];
        }
    }
    return opTilesState;
}
