import {sumTwoDimensionalArray} from "../helpers/commonHelpers";

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


export function generatePrompts(bombsList, boardSize) {
    const prompts =
        Array(boardSize)
        .fill(0).map((_)=>(
            Array(boardSize)
                .fill(0)
        ))

    for (let x = 0; x < bombsList.length; x++){
        for (let y = 0; y < bombsList[x].length; y++){
            if (bombsList[x][y]) {
                if (x > 0) prompts[x - 1][y]++;
                if (y > 0) prompts[x][y - 1]++;
                if (x < boardSize - 1) prompts[x + 1][y]++;
                if (y < boardSize - 1) prompts[x][y + 1]++;

                if (x > 0 && y > 0) prompts[x - 1][y - 1]++;
                if (x < boardSize - 1 && y < boardSize - 1) prompts[x + 1][y + 1]++;

                if (y > 0 && x < boardSize - 1) prompts[x + 1][y - 1]++;
                if (x > 0 && y < boardSize - 1) prompts[x - 1][y + 1]++;
            }
        }
    }

    console.log(prompts)

    return prompts;
}
