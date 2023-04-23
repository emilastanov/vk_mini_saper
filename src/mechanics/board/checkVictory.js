
export function checkVictory(tiles, bombsList) {
    let didWin = true;

    tiles.forEach(tile=>{
        const bombState = bombsList[tile.coords.x][tile.coords.y];
        if (!(((bombState === 0) && tile.checked) || ((bombState === 1) && tile.flagged))){
            didWin = false;
        }
    });

    return didWin;
}
