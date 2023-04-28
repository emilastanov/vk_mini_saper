
/**
 * Проверяет достижение победы.
 * @param {array} tiles - Список всех тайлов на игровом поле.
 * @param {array} bombsList - Список бомб на игровом поле.
 * @returns {boolean} - Выполнение условия достижения победы.
 */
export function checkVictory(tiles, bombsList) {
    // Проверка, что все тайлы удовлетворяют условию выигрыша
    return tiles.every(tile =>
        (bombsList[tile.coords.x][tile.coords.y] === 0 && tile.checked) ||  // Если нет бомбы и тайл отмечен
        (bombsList[tile.coords.x][tile.coords.y] === 1 && tile.flagged)     // Если есть бомба и тайл помечен флагом
    );
}
