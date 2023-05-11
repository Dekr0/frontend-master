function topKFrequent(nums, k) {
    const buckets = new Array(nums.length + 1); // 0 ~ nusm.length
    const map = new Map();
    let i = 0;
    // Initialize buckets
    for (; i < buckets.length; i++) {
        buckets[i] = new Set();
    }
    // Count all appearance
    nums.forEach(num => {
        const count = map.get(num);
        if (!count) {
            map.set(num, 1);
        }
        else {
            map.set(num, count + 1);
        }
    });
    // Write into buckets
    map.forEach((value, key) => {
        buckets[value].add(key);
    });
    let result = [];
    // Collect reuslt, k is guaranteed that 1 <= k <= nums.length
    for (i = buckets.length - 1; i > 0 && k > 0; i--) {
        if (buckets[i].size === 0)
            continue;
        buckets[i].forEach(num => { result.push(num); k--; });
    }
    return result;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([-1, -1], 1));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
