import {getAdjacentCoords} from "../../helpers/boardHelpers";
import {getNumberOfFlaggedTiles, getTileIndex} from "../../helpers/tileHelpers";
import {digTile} from "./digTile";

export function pushPrompt(tileCoords, tiles, bombsList, prompts, setGameState, gameState) {
    const adjacentTilesCoords = getAdjacentCoords(tileCoords);
    const tileIndex = getTileIndex(tileCoords, tiles);

    let opTilesState = [...tiles];
    const tile = opTilesState[tileIndex];

    const numberOfFlaggedTiles = getNumberOfFlaggedTiles(adjacentTilesCoords, opTilesState);

    (numberOfFlaggedTiles === tile.prompt) && adjacentTilesCoords.forEach(coords=>{
        const tileIndex = getTileIndex(coords, opTilesState);

        if (tileIndex > 0){
            const opTile = opTilesState[tileIndex];

            if (!(opTile.checked || opTile.flagged)) {
                opTilesState = digTile(opTile.coords, tiles, bombsList, prompts, setGameState, gameState);
            }
        }
    })

    return opTilesState;
}
