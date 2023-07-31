function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix[0].length;
    let low = 0, high = matrix.length;
    let mid = NaN;

    do {
        mid = Math.floor((low + high) / 2);
        const lower = matrix[mid][0], upper = matrix[mid][n - 1];
        if (target > lower && target < upper) break;

        if (target > upper) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high)

    const arr = matrix[mid];
    low = 0, high = n;
    mid = NaN;

    do {
        mid = Math.floor((low + high) / 2);
        const val = arr[mid];
        if (val === target) return true;

        if (target > val) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high)

    return false;
}
