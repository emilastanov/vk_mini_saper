import {getAdjacentCoords} from "../../helpers/boardHelpers/getAdjacentCoords";
import {getTileIndex} from "../../helpers/tileHelpers/getTileIndex";

export function digAdjacentEmptyTiles(startedTileCoords, tiles, bombsList, prompts) {

    const adjacentTilesCoords = getAdjacentCoords(startedTileCoords);

    while ( adjacentTilesCoords.length ) {
        const tileCoords = adjacentTilesCoords.pop();

        const tileIndex = getTileIndex(tileCoords, tiles);

        if ( tileIndex > -1 ) {
            const tile = tiles[tileIndex];
            const hasBomb = bombsList && bombsList[tileCoords.x][tileCoords.y];
            const prompt = prompts ? prompts[tileCoords.x][tileCoords.y]: 0;

            if ( !hasBomb && !(tile.checked || tile.flagged)) {
                tile.checked = true;
                tile.prompt = prompt;

                tiles[tileIndex] = tile;

                prompt === 0 && adjacentTilesCoords.push(...getAdjacentCoords(tileCoords));
            }
        }
    }

    return tiles;
}
