function groupAnagrams(strs : string[]): string[][] {
    // P: an array of string (1 <= size <= 10^4)
    //  each string 0 <= strs[i].length <= 100
    // R: an array of grouped anagram
    //  each array include some number of strings from original input array, and 
    //  they are the same anagram
    
    const map = new Map<number, string[]>();
    const anagrams: string[][] = [];

    // prime number characteristic => given two different sets of prime number 
    // (each of them might contain duplicate), they are the same if both result 
    // the sum multiplication
    //
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
        53, 57, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    
    let encode = 1;
    
    for (const str of strs) {
        encode = 1;
        for (const c of str) {
            encode *= primes[c.charCodeAt(0) - 97];
        }

        map.has(encode) ? map.get(encode)?.push(str) : map.set(encode, [str]);
    }

    return Array.from(map.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
