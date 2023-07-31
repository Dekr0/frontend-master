function search(nums: number[], target: number): number {
    let low = 0, high = nums.length;
    do {
        const mid = Math.floor((low + high) / 2);
        const p = nums[mid];

        if (target === p) {
            return mid;
        }

        const l = nums[low], h = nums[high - 1];
        if (p >= l) {
            if (target > p || target < l) {
                low = mid + 1;
            } else {
                high = mid;
            }
        } else {
            if (target < p || target > h) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
    } while (low < high)

    return -1;
}
