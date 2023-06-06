const rainMemo = function(height: number[]): number {
    let maxStart = 0;
    let maxEnd = 0;
    const maxStarts = new Uint32Array(height.length);
    const maxEnds = new Uint32Array(height.length);
    let i = 0;
    for ( ; i < height.length; i++) {
        maxStarts[i] = maxStart;
        maxEnds[i] = maxEnd;
        maxStart = maxStart < height[i] ? height[i] : maxStart;
        maxEnd = maxEnd < height[height.length - 1 - i] ? height[height.length - 1 - i] : maxEnd;
    }

    let sum = 0;
    for (i = 0; i < height.length; i++) {
        const limited = maxStarts[i] < maxEnds[height.length - 1 - i] ? maxStarts[i] : maxEnds[height.length - 1 - i];
        const vol = limited - height[i];
        sum += vol >= 0 ? vol : 0;
    }

    return sum;
}

const rain = function(height: number[]): number {
    let sum = 0;
    let i = 0, j = height.length - 1;
    let start = height[i];
    let end = height[j];

    while (i < j) {
        if (start < end) {
            i++;  // Handle edge case => starting and ending do not have boundary
            start = height[i] > start ? height[i] : start;
            sum += start - height[i];
        } else {
            j--;
            end = height[j] > end ? height[j] : end;
            sum += end - height[j];
        }
    }

    return sum;
}

console.log(rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
