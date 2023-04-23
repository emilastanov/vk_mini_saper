import {getTileIndex} from "../../helpers/tileHelpers";

export function flagTile(coords, tilesState, bombsList, setGameState) {
    const opTilesState = [...tilesState];
    const tileIndex = getTileIndex(coords, opTilesState);
    const opTile = opTilesState[tileIndex];

    if(!(opTile.checked))
        opTilesState[tileIndex].flagged = !opTile.flagged;

    return opTilesState;
}
