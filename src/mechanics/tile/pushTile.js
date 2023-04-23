import {digTile} from "./digTile";
import {flagTile} from "./flagTile";
import {pushPrompt} from "./pushPrompt";


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
    let opTilesState;

    if (gameMode === 'flag') {
        opTilesState = flagTile(
            tile.coords,
            tiles
        );
    } else if (!(tile.flagged || tile.checked)) {
        opTilesState = digTile(
            tile.coords,
            tiles,
            bombsList,
            prompts,
            setGameState,
            gameState
        );

    } else if (tile.checked && tile.prompt !== 0) {
        opTilesState = pushPrompt(
            tile.coords,
            tiles,
            bombsList,
            prompts,
            setGameState,
            gameState
        );
    }

    opTilesState && setTilesState(opTilesState);
}
