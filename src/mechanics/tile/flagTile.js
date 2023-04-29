import {getTileIndex} from "../../helpers/tileHelpers";

/**
 * Устанавливает или снимает флаг на тайле.
 * @param {object} coords - Координаты тайла, на котором нужно установить или снять флаг.
 * @param {object[]} tilesState - Массив состояний тайлов.
 * @returns {object[]} - Обновленный массив состояний тайлов.
 */
export function flagTile(coords, tilesState) {
    // Создаем копию массива состояний тайлов
    const opTilesState = [...tilesState];
    // Находим индекс тайла по заданным координатам
    const tileIndex = getTileIndex(coords, opTilesState);
    // Получаем тайл по найденному индексу
    const opTile = opTilesState[tileIndex];

    // Проверяем, не отмечен ли тайл, и в зависимости от этого устанавливаем или снимаем флаг
    if (!(opTile.checked))
        opTilesState[tileIndex].flagged = !opTile.flagged;

    return opTilesState; // Возвращаем обновленный массив состояний тайлов
}
