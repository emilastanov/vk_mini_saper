
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
