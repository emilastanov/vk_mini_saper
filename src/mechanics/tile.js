import {getAdjacentCoords} from "../helpers/boardHelpers";
import {tilesStateUpdater} from "../helpers/tileHelpers";


export function pushTile(
    bombsList,
    gameMode,
    prompts,
    tile,
    tiles,
    setTilesState,
    setGameState,
    gameState
) {
    const tsu = tilesStateUpdater(tiles, setTilesState);

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
                setTilesState,
                setGameState,
                gameState
            );
        }
    }
}

function digTile(tile, tiles, bombsList, prompts, updateTilesState, setTilesState, setGameState, gameState) {
    const hasBomb = bombsList && bombsList[tile.coords.x][tile.coords.y];
    const prompt = prompts ? prompts[tile.coords.x][tile.coords.y]: 0;

    if (gameState === "IN_PROGRESS") {

        if (hasBomb) {
            setTilesState(explodeBombs(bombsList, tiles));
            setGameState('GAME_OVER');

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
}

function digAdjacentTiles(tiles, startedTile, bombsList, prompts) {

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

function explodeBombs(bombList, tiles) {
    const newTilesState = [...tiles];

    for (let x = 0; x < bombList.length; x++) {
        for (let y = 0; y < bombList[x].length; y++) {
            const tileIndex = newTilesState.findIndex(tile=>(
                (tile.coords.x === x) && (tile.coords.y === y)
            ));
            newTilesState[tileIndex].exploded = !!bombList[x][y];
        }
    }
    return newTilesState;
}
