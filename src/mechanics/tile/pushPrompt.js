import {getAdjacentCoords} from "../../helpers/boardHelpers";
import {getNumberOfFlaggedTiles, getTileIndex} from "../../helpers/tileHelpers";
import {digTile} from "./digTile";

/**
 * Применяет подсказку к тайлу в игре "Сапер".
 * @param {object} tileCoords - Координаты тайла, к которому применяется подсказка.
 * @param {object[]} tiles - Массив состояний тайлов.
 * @param {number[][]} bombsList - Список бомб, представленный в виде двумерного массива.
 * @param {number[][]} prompts - Список подсказок, представленный в виде двумерного массива.
 * @param {function} setGameState - Функция установки состояния игры.
 * @returns {object[]} - Обновленный массив состояний тайлов.
 */
export function pushPrompt(tileCoords, tiles, bombsList, prompts, setGameState) {
    // Получаем координаты соседних тайлов
    const adjacentTilesCoords = getAdjacentCoords(tileCoords);
    // Находим индекс тайла по заданным координатам
    const tileIndex = getTileIndex(tileCoords, tiles);

    // Создаем копию массива состояний тайлов
    let opTilesState = [...tiles];
    const tile = opTilesState[tileIndex];

    // Получаем количество тайлов с установленным флагом из соседних тайлов
    const numberOfFlaggedTiles = getNumberOfFlaggedTiles(adjacentTilesCoords, opTilesState);

    // Если количество установленных флагов равно подсказке тайла
    if (numberOfFlaggedTiles === tile.prompt) {
        // Проходим по каждому соседнему тайлу
        adjacentTilesCoords.forEach(coords => {
            const tileIndex = getTileIndex(coords, opTilesState);

            if (tileIndex >= 0) {
                const opTile = opTilesState[tileIndex];

                // Если тайл не отмечен и не помечен флагом, выполняем открытие тайла
                if (!(opTile.checked || opTile.flagged)) {
                    opTilesState = digTile(opTile.coords, tiles, bombsList, prompts, setGameState);
                }
            }
        });
    }

    return opTilesState; // Возвращаем обновленный массив состояний тайлов
}

