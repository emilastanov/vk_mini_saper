
/**
 * Генерирует расположение бомб на игровом поле.
 * @param {object} startingPoint - Начальная точка, от которой нужно расположить бомбы.
 * @param {number} numberOfBombs - Количество бомб, которое нужно расположить на игровом поле.
 * @param {number} boardSize - Размер игрового поля.
 * @returns {array} - Матрица, представляющая расположение бомб на игровом поле.
 */
export function generateBombs(startingPoint, numberOfBombs, boardSize) {
    const bombsList = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    let bombCount = 0;

    // Генерация бомб до достижения нужного количества
    while (bombCount !== numberOfBombs) {
        // Случайные координаты для новой бомбы
        const bombCoords = {
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize)
        };

        // Проверка, что на данной позиции нет другой бомбы и она не совпадает с начальной точкой
        if (bombsList[bombCoords.x][bombCoords.y] === 0 &&
            !((bombCoords.x === startingPoint.x) && (bombCoords.y === startingPoint.y))
        ) {
            // Установка бомбы в указанную позицию и увеличение счетчика
            bombsList[bombCoords.x][bombCoords.y] = 1;
            bombCount++;
        }
    }

    return bombsList;
}
