
export function getTileIndex(coords, tiles) {
    return tiles.findIndex(tile=>(
        (coords.x === tile.coords.x) && (coords.y === tile.coords.y)
    ));
}
