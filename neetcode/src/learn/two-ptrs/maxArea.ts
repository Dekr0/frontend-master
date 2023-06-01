function maxArea(heights: number[]): number {
    let max = 0;
    let area = 0;
    for (let low = 0, high = heights.length - 1; low < high; ) {
        area = Math.min(heights[low], heights[high]) * (high - low);
        max = Math.max(max, area);
        if (heights[low] === heights[high]) {
            low++;
            high--;
        } else if (heights[low] < heights[high]) {
            low++;
        } else {
            high--;
        }
    }

    return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
