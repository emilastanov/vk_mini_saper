import { getAdjacentCoords } from "../../helpers/boardHelpers";
import { getTileIndex } from "../../helpers/tileHelpers";

/**
 * Откапывает соседние пустые тайлы, начиная с заданного и продолжая по соседству.
 * @param {object} startedTileCoords - Координаты исходного тайла.
 * @param {array} tiles - Список всех тайлов на игровом поле.
 * @param {array} bombsList - Список бомб на игровом поле.
 * @param {array} prompts - Список подсказок для каждого тайла на игровом поле.
 * @returns {array} - Обновленный список тайлов после откапывания соседних пустых тайлов.
 */
export function digAdjacentEmptyTiles(startedTileCoords, tiles, bombsList, prompts) {
    // Получаем координаты соседних тайлов для исходного тайла
    const adjacentTilesCoords = getAdjacentCoords(startedTileCoords);

    // Пока есть непроверенные соседние тайлы
    while (adjacentTilesCoords.length) {
        // Берем координаты последнего тайла из массива
        const tileCoords = adjacentTilesCoords.pop();

        // Находим индекс тайла в массиве tiles
        const tileIndex = getTileIndex(tileCoords, tiles);

        // Если тайл найден
        if (tileIndex > -1) {
            const tile = tiles[tileIndex];

            // Проверяем, есть ли бомба у текущего тайла
            const hasBomb = bombsList?.[tileCoords.x]?.[tileCoords.y];
            // Получаем подсказку для текущего тайла, если она есть, иначе 0
            const prompt = prompts?.[tileCoords.x]?.[tileCoords.y] ?? 0;

            // Если у текущего тайла нет бомбы и он не отмечен или помечен флагом
            if (!hasBomb && !(tile.checked || tile.flagged)) {
                // Отмечаем тайл как проверенный и устанавливаем подсказку
                tile.checked = true;
                tile.prompt = prompt;

                // Обновляем тайл в массиве tiles
                tiles[tileIndex] = tile;

                // Если подсказка равна 0, добавляем соседние тайлы для проверки
                if (prompt === 0) {
                    adjacentTilesCoords.push(...getAdjacentCoords(tileCoords));
                }
            }
        }
    }

    return tiles;
}
