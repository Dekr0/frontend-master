function trap(height: number[]): number {
    if (height.length === 1 || height.length === 2) return 0;

    let sum = 0;

    let low = 0;

    for (let high = 0; high < height.length; high++) {
        if (height[i] === 0) continue;
        if (height[low] === 0 && height[high] === 0) {
            low = high = i;
            continue;
        }
        
    }


    return sum;
}
