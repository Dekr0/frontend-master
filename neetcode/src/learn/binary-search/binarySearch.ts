function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length;
    while(low < high) {
        const mid = Math.floor((high + low) / 2);
        const c = nums[mid];
        if (c === target) {
            return mid;
        } else if (target > c){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return -1;
}
