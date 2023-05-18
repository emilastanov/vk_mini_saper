import { explodeBombs } from "./explodeBombs";
import { digAdjacentEmptyTiles } from "./digAdjacentEmptyTiles";
import { getTileIndex } from "../../helpers/tileHelpers";
import {doTaptic} from "../../helpers/vkBridgeHelpers";

/**
 * Откапывает тайл (клетку) на игровом поле и выполняет соответствующие действия.
 * @param {object} tileCoords - Координаты откапываемого тайла.
 * @param {array} tiles - Список всех тайлов на игровом поле.
 * @param {array} bombsList - Список бомб на игровом поле.
 * @param {array} prompts - Список подсказок для каждого тайла на игровом поле.
 * @param {function} setGameState - Функция для установки состояния игры.
 * @returns {array} - Обновленный список тайлов после выполнения действий.
 */
export function digTile(tileCoords, tiles, bombsList, prompts, setGameState) {
    // Проверяем, есть ли бомба у текущего тайла
    const hasBomb = bombsList?.[tileCoords.x]?.[tileCoords.y];
    // Получаем подсказку для текущего тайла, если она есть, иначе 0
    const prompt = prompts?.[tileCoords.x]?.[tileCoords.y] ?? 0;

    const updatedTiles = [...tiles]; // Создаем копию списка тайлов

    if (hasBomb) {
        setGameState('GAME_OVER');
        doTaptic('error')
            .catch(e=>{console.log(e)});

        return explodeBombs(bombsList, updatedTiles); // Вызываем функцию взрыва бомб

    } else {
        const tileIndex = getTileIndex(tileCoords, updatedTiles); // Получаем индекс откапываемого тайла
        updatedTiles[tileIndex].checked = true; // Устанавливаем флаг "checked" в true для откапываемого тайла
        updatedTiles[tileIndex].prompt = prompt; // Устанавливаем подсказку для откапываемого тайла

        if (prompt === 0) {
            return digAdjacentEmptyTiles(
                updatedTiles[tileIndex].coords, // Координаты откапываемого тайла
                updatedTiles, // Обновленный список тайлов
                bombsList, // Список бомб
                prompts // Список подсказок
            );

        } else {
            return updatedTiles;
        }
    }
}
