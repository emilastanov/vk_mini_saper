import { pushPrompt } from "./pushPrompt";
import { checkVictory } from "../board";
import { flagTile } from "./flagTile";
import { digTile } from "./digTile";

/**
 * Обрабатывает нажатие на тайл в игре "Сапер".
 * @param {number[][]} bombsList - Список бомб, представленный в виде двумерного массива.
 * @param {string} gameMode - Режим игры ('flag' - установка флага, 'dig' - открытие тайла).
 * @param {number[][]} prompts - Список подсказок, представленный в виде двумерного массива.
 * @param {object} tile - Выбранный тайл.
 * @param {object[]} tiles - Массив состояний тайлов.
 * @param {function} setTilesState - Функция установки состояния тайлов.
 * @param {function} setGameState - Функция установки состояния игры.
 */
export function pushTile(
    bombsList,
    gameMode,
    prompts,
    tile,
    tiles,
    setTilesState,
    setGameState
) {
    let opTilesState;

    if (gameMode === 'flag') {
        opTilesState = flagTile(tile.coords, tiles);
    } else if (!(tile.flagged || tile.checked)) {
        opTilesState = digTile(tile.coords, tiles, bombsList, prompts, setGameState);
    } else if (tile.checked && tile.prompt !== 0) {
        opTilesState = pushPrompt(tile.coords, tiles, bombsList, prompts, setGameState);
    }

    if (opTilesState) {
        if (checkVictory(tiles, bombsList)) {
            setGameState("WIN");
        }
        setTilesState(opTilesState);
    }
}
