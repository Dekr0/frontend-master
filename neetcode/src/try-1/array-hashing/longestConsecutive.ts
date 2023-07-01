export default function longestConsecutiveSeq(nums: number[]): number {
    // Create a hash set so it can be faster to search (in the context of large inputs)
    const set = new Set<number>(nums);  

    let max = 1;
    let len: number;  // sequnece length for each sequence
    let next: number;  // next number in a sequence

    for (const num of nums) {
       len = 1;
       // Check if it is starting point of a sequence (no previous neighbor)
       if (!set.has(num - 1)) {
           next = num + 1;
           while (set.has(next++)) len++;        

           max = Math.max(max, len);
       }
    }

    return max;
}
