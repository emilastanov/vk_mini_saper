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

    return {gap, gridTemplateColumns, sizeOfTiles};
};
