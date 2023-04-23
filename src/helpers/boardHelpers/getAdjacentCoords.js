
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
