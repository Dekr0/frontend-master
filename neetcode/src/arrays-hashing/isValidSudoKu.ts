function isValidSudoku(board: string[][]): boolean {
    const valid = true;
    const rows = new Array<Set<string>>(9);
    const cols = new Array<Set<string>>(9);
    const sqrs: Set<string>[][]  = [];

    for (let i = 0; i < 3; i++) {
        sqrs.push(new Array<Set<string>>(3));
    }
    
    let sqrtI = 0;
    let sqrtJ = 0;
    let cell: string;
    for (let i = 0; i < board.length; i++) {
        sqrtI = i % 3;
        for (let j = 0; j < board.length; j++) {
            // Check row
            cell = board[i][j];
            if (cell === '.') break;

            sqrtJ = j % 3;

            if (!rows[i]) {
                rows[i] = new Set<string>();
                rows[i].add(cell);
            } else {
                if (rows[i].has(cell)) {
                    return false;
                } else {
                    rows[i].add(cell);
                }
            }

            if (!cols[j]) {
                cols[j] = new Set<string>();
                cols[j].add(cell);
            } else {
                if (cols[j].has(cell)) {
                    return false;
                } else {
                    cols[j].add(cell);
                }
            }

            if (!sqrs[sqrtI][sqrtJ]) {
                sqrs[sqrtI][sqrtJ] = new Set<string>();
                sqrs[sqrtI][sqrtJ].add(cell);
            } else {
                if (sqrs[sqrtI][sqrtJ].has(cell)) {
                    return false;
                } else {
                    sqrs[sqrtI][sqrtJ].add(cell);
                }
            }
        }
    }

    return valid;
};
