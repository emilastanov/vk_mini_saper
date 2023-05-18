
/**
 * Генерирует расположение бомб на игровом поле.
 * @param {object} startingPoint - Начальная точка, от которой нужно расположить бомбы.
 * @param {number} numberOfBombs - Количество бомб, которое нужно расположить на игровом поле.
 * @param {object} boardSize - Размеры игрового поля.
 * @returns {array} - Матрица, представляющая расположение бомб на игровом поле.
 */
export function generateBombs(startingPoint, numberOfBombs, boardSize) {
    const [width, height] = boardSize;
    const bombsList = Array.from({ length: height }, () => Array(width).fill(0));
    let bombCount = 0;

    // Генерация бомб до достижения нужного количества
    while (bombCount !== numberOfBombs) {
        // Случайные координаты для новой бомбы
        const bombCoords = {
            x: Math.floor(Math.random() * height),
            y: Math.floor(Math.random() * width)
        };

        // Проверка, что на данной позиции нет другой бомбы и она не совпадает с начальной
        // и соседними с начальной точками
        if (
            bombsList[bombCoords.x][bombCoords.y] === 0 &&
            getAndCheckAdjacentCoords(startingPoint, bombCoords)
        ) {
            // Установка бомбы в указанную позицию и увеличение счетчика
            bombsList[bombCoords.x][bombCoords.y] = 1;
            bombCount++;
        }
    }

    return bombsList;
}

function getAndCheckAdjacentCoords(point, bombCoords) {
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if ((bombCoords.x === point.x + dx) && (bombCoords.y === point.y + dy)) {
                return false;
            }
        }
    }
    return true;
}
