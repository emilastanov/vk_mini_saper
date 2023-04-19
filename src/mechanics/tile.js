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
                tsu,
                setTilesState
            );
        }
    }
}

function digTile(tile, tiles, bombsList, prompts, updateTilesState, setTilesState) {
    const hasBomb = bombsList && bombsList[tile.coords.x][tile.coords.y];
    const prompt = prompts ? prompts[tile.coords.x][tile.coords.y]: 0;

    if (hasBomb) {

    } else {
        const newTilesState = updateTilesState(tile.coords, {
            checked: true,
            prompt
        });
        tile.checked = true;
        tile.prompt = prompt;

        if (prompt === 0){
            setTilesState(digAdjacentTiles(newTilesState, tile, bombsList, prompts, updateTilesState));
        }

    }
}

function digAdjacentTiles(tiles, startedTile, bombsList, prompts, updateTilesState) {

    const adjacentTilesCoords = getAdjacentCoords(startedTile.coords);

    while ( adjacentTilesCoords.length ) {
        const coords = adjacentTilesCoords.pop();

        const tileIndex = tiles.findIndex(tile=>(
            (tile.coords.x === coords.x) && (tile.coords.y === coords.y)
        ));
        const tile = tiles[tileIndex];

        if ( tile ) {
            const hasBomb = bombsList && bombsList[coords.x][coords.y];
            const prompt = prompts ? prompts[coords.x][coords.y]: 0;

            if ( !hasBomb && !(tile.checked || tile.flagged)) {
                tile.checked = true;
                tile.prompt = prompt;

                tiles[tileIndex] = tile;

                prompt === 0 && adjacentTilesCoords.push(...getAdjacentCoords(coords));
            }
        }
    }

    return tiles;
}
