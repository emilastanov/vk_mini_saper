
export function tilesStateUpdater(tilesState, setter) {

    return function(coords, newState) {
        const newTilesState = [...tilesState];
        let updatingTileIndex = newTilesState.findIndex(tile=>(
            (tile.coords.x === coords.x) && (tile.coords.y === coords.y)
        ));


        newTilesState[updatingTileIndex] = {
            ...newTilesState[updatingTileIndex],
            ...newState
        };

        setter(newTilesState)
    }
}

export function getTileTextColor(prompt) {
    switch (prompt) {
        case 1:
            return '#2fb0ff';
        case 2:
            return '#5ac763';
        case 3:
            return '#d76c64';
        case 4:
            return '#953bc4';
        default:
            return '#440693';
    }
}

export function createTiles(width, height) {
    const tiles = [];

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            tiles.push({
                coords: {x, y},
                checked: false,
                flagged: false
            });
        }
    }

    return tiles;
}
