function findMin(nums: number[]): number {
    let low = 0, high = nums.length;
    let min = nums[low];
    do {
        if (nums[low] < nums[high - 1]) {
            min = Math.min(min, nums[low]);
            break;
        }

        const mid = Math.floor((low + high) / 2);
        min = Math.min(min, nums[mid]);
        if (nums[mid] >= nums[low])
            low = mid + 1;
        else
            high = mid;
    } while (low < high);

    return min;
}
