import {explodeBombs} from "./explodeBombs";
import {digAdjacentEmptyTiles} from "./digAdjecentEmptyTiles";
import {getTileIndex} from "../../helpers/tileHelpers";

export function digTile(tileCoords, tiles, bombsList, prompts, setGameState, gameState) {
    const hasBomb = bombsList && bombsList[tileCoords.x][tileCoords.y];
    const prompt = prompts ? prompts[tileCoords.x][tileCoords.y]: 0;

    const opTilesState = [...tiles];

    if (hasBomb) {
        setGameState('GAME_OVER');

        return explodeBombs(bombsList, opTilesState);

    } else {
        const tileIndex = getTileIndex(tileCoords, opTilesState);
        opTilesState[tileIndex].checked = true;
        opTilesState[tileIndex].prompt = prompt;

        if (prompt === 0){
            return digAdjacentEmptyTiles(
                opTilesState[tileIndex].coords,
                opTilesState,
                bombsList,
                prompts
            );

        } else {
            return opTilesState;

        }
    }
}
