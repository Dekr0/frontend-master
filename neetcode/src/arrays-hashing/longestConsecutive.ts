function longestConsecutive(nums: number[]): number {
    const uniques = new Set(nums);  // O(N) Space

    let longest = 0;
    let curr = 0;

    // Seems to be O(N^2)
    // Look closely how number of qualified numbers and lengths of the sequences
    // relate to each other
    for (let unique of uniques) {
        if (longest === nums.length) return longest;

        // A number is qualified for this branch if the previous neighbor of this 
        // number is not in the input array => head of a sequence
        if (!uniques.has(unique - 1)) {
            curr = 0;
            while (uniques.has(unique++)) {
                curr++;
            }

            longest = Math.max(curr, longest);
        }
    }

    return longest;
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,3,5,7,9,11]));
