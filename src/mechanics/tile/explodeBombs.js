import {getTileIndex} from "../../helpers/tileHelpers";

/**
 * Взрывает бомбы на тайлах на основе списка бомб.
 * @param {number[][]} bombList - Список бомб, представляющий наличие бомб на каждом тайле.
 * @param {object[]} tiles - Массив тайлов, которые требуется обновить.
 * @returns {object[]} - Обновленный массив тайлов с установленным флагом exploded.
 */
export function explodeBombs(bombList, tiles) {
    const opTilesState = [...tiles];

    // Пробегаемся по всему двумерному массиву списка бомб
    for (let x = 0; x < bombList.length; x++) {
        for (let y = 0; y < bombList[x].length; y++) {
            const tileIndex = getTileIndex({x, y}, opTilesState);
            opTilesState[tileIndex].exploded = !!bombList[x][y]; // Помечаем тайл как взорванный
        }
    }
    return opTilesState;
}

