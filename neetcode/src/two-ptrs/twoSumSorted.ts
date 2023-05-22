function twoSum(numbers: number[], target: number): number[] {
    // P: 
    //  1-indexed array of integers (sorted, increasing order);
    //  an target number that can be added with two numbers from the array
    // R: return two numbers such that they add up to a specific target number 
    // C: constant space => no storages that depends on the input size (No Map, Set, ...)
    // Characteristic
    //  since the array is sorted, this give a following property
    //  consider 
    for (let low = 0, high = numbers.length - 1; low < high; ) {
        const sum = numbers[low] + numbers[high];
        if (sum === target) return [low, high];
        else if (sum < target) low++;
        else if (sum > target) high--;
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([2, 2], 4));
console.log(twoSum([-1, 0], -1));
