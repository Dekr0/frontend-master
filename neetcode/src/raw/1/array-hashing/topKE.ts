function topKE(nums: number[], k: number): number[] {
    // P
    // nums: an integer arr
    //  1 <= size <= 10^5
    //  for each element => -10^4 <= e <= 10^4
    //  1 <= k <= # of unique e in nums
    // 
    // k: an integer => top K frequent number in array
    //
    // R
    //  top K frequent numbers in an array
    //
    // PS
    //  bucket sort 
    //  
    //  an 2D array 
    //  => 1D index is number of occurences, x
    //  => 2D index is the number, y, that occurence x times
    //  => example [
    //      0 (0 ocurrences) => [this should be none]
    //      1 (1 ocurrences) => [3]
    //      2 (2 ocurrences) => [2]
    //      3 (3 ocurrences) => [1]
    //  ]
    // to retrive top K element, loop the 2D array backward, collect number in each
    // occurence until K is 0
    
    const map = new Map<number, number>();
    const count: number[][] = [];
    const r: number[] = [];
    let i = 0;
    let j = 0;
    for ( ; i < nums.length; i++) {
        count[i] = [];
    }
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else if (map.get(num)) {
            map.set(num, map.get(num) as number + 1);
        }
    }
    map.forEach((v, k) => count[v].push(k));
    
    console.log(map);
    console.log(count);
    

    for (i = count.length - 1; k > 0; i--) {
        if (count[i].length > 0) {
            for (j = 0; k > 0; j++, k--) {
               r.push(count[i][j]); 
            }
        }
    }

    return r;
}


// E
// Any order
console.log(topKE([1, 1, 1, 2, 2, 3], 2));  // [1, 2]
console.log(topKE([1, 1, 1, 2, 2, 3], 3));  // [1, 2, 3]
console.log(topKE([1], 1));  // [1]
console.log(topKE([1, 2], 2));  // [1, 2]
