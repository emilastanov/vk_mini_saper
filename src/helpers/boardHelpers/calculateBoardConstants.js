import {numberOfTilesMap, sizeOfTileMap, tilesGap} from "../../static/texts/boardData";

export const calculateBoardConstants = (size, width) => {
    const numberOfColumns = numberOfTilesMap[size];

    const deviceScale =
        width / (
            sizeOfTileMap[size] * numberOfColumns[0] +
            tilesGap*(numberOfColumns[0] - 1) +
            50
        );
    const sizeOfTiles = sizeOfTileMap[size] * deviceScale;
    const gap = tilesGap * deviceScale;

    const gridTemplateColumns = (
        Array(numberOfColumns[0])
            .fill()
            .map(_ => (`${sizeOfTiles}px`))
    ).join(' ');

    return {gap, gridTemplateColumns, sizeOfTiles, numberOfColumns};
};
