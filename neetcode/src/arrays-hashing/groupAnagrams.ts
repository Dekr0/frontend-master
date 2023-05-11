/* 
    * Approach 1:
    *
    * For each string i, compare i with the first string of each anagram group 
    * character by character
    * 
    * Time complexity: 
    *   O(strs.length) * O(anagrams.length) * O(average length of all strings)
    *   anagrams.length <= strs.length
    *
    * Memory usage: Ok ?
    *
    * */
function groupAnagrams(strs: string[]): string[][] {
    let anagrams: string[][] = [];
    for (const str of strs) {
        if (anagrams.length === 0) {
            anagrams.push([str]);
            continue;
        }

        let newAnagram = true;
        // Grab the first stirng of each anagram group
        // Compare the first string of each anagram group with "str" character by character
        for (let anagram of anagrams) {
            let match = true;
            for (const char of str) {
                if (!anagram[0].includes(char)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                anagram.push(str);
                newAnagram = false;
                break;
            }
        }

        if (newAnagram) {
            anagrams.push([str]);
        }
    }
    return anagrams
};

/*
    * Approach 2:
    *
    * Each char in a string always stay within a ~ z. Thus, each string can be 
    * characterized by how many times each letter appear. If two string have the 
    * same characterization defined above, they are anagram.
    * The number of times each letter appear is a hash key.
    *
    * Time complexity: 
    *   O(strs.length) * { O(26) + O(average length of all strings) + O(26) + O(k) }
    * Space complexity: Ok?
    * 
    * */
function groupAnagramsFast(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    const counts = new Uint32Array(26); // reuse
    let pattern = ""; // reuse

    // O(str.length)
    for (const str of strs) {
        counts.fill(0); // reset => O(26)?

            // O(average length of a string)
            for (const char of str) {
            counts[char.charCodeAt(0) - 97] += 1;
        }

        pattern = counts.toString(); // O(26)?

            // O(k)
            if (!map.has(pattern)) {
            map.set(pattern, [str]);
        } else {
            map.get(pattern)?.push(str);
        }
    }

    // O(number of anagrams)
    return Array.from(map.values());
}

/*
    * Approach 3: using Prime number to encode a string
    * Why not only using ASCII to take the sum / product of each character ?
    * It will have collision
    *
    * Time complexity: O(strs.length) * O(average number of all strings)
    */
function groupAnagramsEncoding(strs: string[]): string[][] {
    const map = new Map<number, string[]>();
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    let total = 1;
    for (const str of strs) {
        total = 1; // reset
        for (const c of str) {
            total *= primes[c.charCodeAt(0) - 97];
        }

        if (!map.has(total)) {
            map.set(total, [str]);
        } else {
            map.get(total)?.push(str);
        }
    }

    return Array.from(map.values());
}
