import {numberOfTilesMap, sizeOfTileMap, tilesGap} from "../static/texts/boardData";


export const makeBoardConstants = (size, width) => {
    const numberOfColumns = numberOfTilesMap[size];

    const deviceScale =
        width / (
            sizeOfTileMap[size] * numberOfColumns +
            tilesGap*(numberOfColumns - 1) +
            50
        );
    const sizeOfTiles = sizeOfTileMap[size] * deviceScale;
    const gap = tilesGap * deviceScale;

    const gridTemplateColumns = (
        Array(numberOfColumns)
            .fill()
            .map(_ => (`${sizeOfTiles}px`))
    ).join(' ');

    return {gap, gridTemplateColumns, sizeOfTiles, numberOfColumns};
};

export const getAdjacentCoords = (coords) => ([
    {x: coords.x + 1, y: coords.y},
    {x: coords.x - 1, y: coords.y},
    {x: coords.x, y: coords.y + 1},
    {x: coords.x, y: coords.y - 1},
    {x: coords.x + 1, y: coords.y - 1},
    {x: coords.x - 1, y: coords.y - 1},
    {x: coords.x + 1, y: coords.y + 1},
    {x: coords.x - 1, y: coords.y + 1}
]);
