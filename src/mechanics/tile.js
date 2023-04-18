
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

export function pushTile(gameMode, tile, updateTilesState) {

    if (gameMode === 'flag') {
        !(tile.flagged || tile.checked) &&
        updateTilesState(tile.coords, {
            flagged: true
        })
    } else {
        !(tile.flagged || tile.checked) &&
        updateTilesState(tile.coords, {
            checked: true
        })
    }
}

export function tilesStateUpdater(tilesState, setter) {

    return function(coords, newState) {
        const newTilesState = [...tilesState];
        let updatingTileIndex = newTilesState.findIndex(tile=>tile.coords === coords);


        newTilesState[updatingTileIndex] = {
            ...newTilesState[updatingTileIndex],
            ...newState
        };

        setter(newTilesState)
    }
}


