
/**
 * Генерирует подсказки для игрового поля на основе расположения бомб.
 * @param {array} bombsList - Матрица, представляющая расположение бомб на игровом поле.
 * @param {number} boardSize - Размер игрового поля.
 * @returns {array} - Матрица, представляющая подсказки для каждого тайла на игровом поле.
 */
export function generatePrompts(bombsList, boardSize) {
    const prompts = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));

    // Проходимся по каждому элементу в bombsList
    bombsList.forEach((row, x) => {
        row.forEach((isBomb, y) => {
            // Если текущий элемент является бомбой
            if (isBomb) {
                // Проходимся по окрестности каждой бомбы
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        // Вычисляем новые координаты
                        const [newX, newY] = [x + dx, y + dy];

                        // Проверяем, являются ли новые координаты допустимыми
                        if (isValidCell(newX, newY, boardSize)) {
                            // Увеличиваем значение в соответствующей ячейке prompts
                            prompts[newX][newY]++;
                        }
                    }
                }
            }
        });
    });

    return prompts;
}

// Функция для проверки допустимости ячейки
function isValidCell(x, y, boardSize) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}
