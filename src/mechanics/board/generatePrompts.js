
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

    return prompts;
}
