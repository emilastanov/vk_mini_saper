import {sumTwoDimensionalArray} from "../../helpers/commonHelpers/sumTwoDimensionalArray";

export function generateBombs(startingPoint, numberOfBombs, boardSize) {
    const bombsList =
        Array(boardSize)
            .fill(0).map((_)=>(
            Array(boardSize)
                .fill(0)
        ))

    while (sumTwoDimensionalArray(bombsList) !== numberOfBombs) {
        const bombCoords = {
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize)
        };

        if (bombsList[bombCoords.x][bombCoords.y] === 0 &&
            ((bombCoords.x !== startingPoint.x) && (bombCoords.y !== startingPoint.y))
        ) {
            bombsList[bombCoords.x][bombCoords.y] = 1;
        }
    }

    return bombsList;
}
