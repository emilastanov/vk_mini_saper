import {getAdjacentCoords} from "../helpers/boardHelpers";
import {tilesStateUpdater} from "../helpers/tileHelpers";


export function pushTile(
    bombsList,
    gameMode,
    prompts,
    tile,
    tiles,
    setTilesState
) {
    const tsu = tilesStateUpdater(tiles, setTilesState, );

    if (gameMode === 'flag') {
        !(tile.flagged || tile.checked) &&
        tsu(tile.coords, {
            flagged: true
        })

    } else {
        if(!(tile.flagged || tile.checked)){
            digTile(
                tile,
                tiles,
                bombsList,
                prompts,
                tsu
            );
        }
    }
}

function digTile(tile, tiles, bombsList, prompts, updateTilesState) {
    const hasBomb = bombsList && bombsList[tile.coords.x][tile.coords.y];
    const prompt = prompts ? prompts[tile.coords.x][tile.coords.y]: 0;

    if (hasBomb) {

    } else {
        updateTilesState(tile.coords, {
            checked: true,
            prompt
        })
    }
}

function digAdjacentTiles(tiles, startedTile, bombsList, prompts, updateTilesState) {
    const adjacentTilesCoords = getAdjacentCoords(startedTile.coords);
    adjacentTilesCoords.forEach(coords=>{
        const tileIndex = tiles.findIndex(tile=>(
            (tile.coords.x === coords.x) && (tile.coords.y === coords.y)
        ));
        const tile = tiles[tileIndex];

        const hasBomb = bombsList && bombsList[tile.coords.x][tile.coords.y];
        const prompt = prompts ? prompts[tile.coords.x][tile.coords.y]: 0;

        digTile(
            tile,
            hasBomb,
            prompt,
            updateTilesState
        );
    })
}
