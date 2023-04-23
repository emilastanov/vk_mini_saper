import {getTileIndex} from "./getTileIndex";

export function getNumberOfFlaggedTiles(adjacentTilesCoords, tilesState) {
    return adjacentTilesCoords.reduce(((res, coords)=>{
        const tileIndex = getTileIndex(coords, tilesState);
        const opTile = tilesState[tileIndex];
        return (opTile && opTile.flagged)? res + 1 : res
    }), 0);
}
