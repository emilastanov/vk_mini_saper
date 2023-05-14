
export function checkConstants(board, size) {
    const bombCount = board.flat().reduce((acc, item)=>(acc+item), 0);
    const width = board[0].length();
    return `${size}${bombCount}-${width}`;
}
