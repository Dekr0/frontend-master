function searchInsert(nums: number[], target: number): number {
    // sorted array & distinct integers
    // perform binary search, if it cannot find a solution => return the current index
    let low = 0;
    let high = nums.length;
    let mid = NaN;
    while(low < high) {
        mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return target > nums[mid] ? mid + 1 : mid
}

// [1, 3, 5, 6], 2 => 1 
// 2 is not in the array, the position should be inserted in order to maintain 
// the array sorted is right before 3 => (index 1)
//
// [1, 3, 5, 6], 5 => 2
// 5 is in the array
