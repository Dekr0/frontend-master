function isValidSudoku(board) {
    const valid = true;
    const rows = new Array(9);
    const cols = new Array(9);
    const sqrs = [];
    for (let i = 0; i < 3; i++) {
        sqrs.push(new Array(3));
    }
    let sqrtI = 0;
    let sqrtJ = 0;
    let cell;
    for (let i = 0; i < board.length; i++) {
        sqrtI = i % 3;
        for (let j = 0; j < board.length; j++) {
            // Check row
            cell = board[i][j];
            if (cell === '.')
                break;
            sqrtJ = j % 3;
            if (!rows[i]) {
                rows[i] = new Set();
                rows[i].add(cell);
            }
            else {
                if (rows[i].has(cell)) {
                    return false;
                }
                else {
                    rows[i].add(cell);
                }
            }
            if (!cols[j]) {
                cols[j] = new Set();
                cols[j].add(cell);
            }
            else {
                if (cols[j].has(cell)) {
                    return false;
                }
                else {
                    cols[j].add(cell);
                }
            }
            if (!sqrs[sqrtI][sqrtJ]) {
                sqrs[sqrtI][sqrtJ] = new Set();
                sqrs[sqrtI][sqrtJ].add(cell);
            }
            else {
                if (sqrs[sqrtI][sqrtJ].has(cell)) {
                    return false;
                }
                else {
                    sqrs[sqrtI][sqrtJ].add(cell);
                }
            }
        }
    }
    return valid;
}
;
