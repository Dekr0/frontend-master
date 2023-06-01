const base = "a".charCodeAt(0);

function isAnagram(s: string, t: string): boolean {
    // P 
    //  - two strings =>  (lowercase english letters a ~ z)
    //  - for each string, 1 <= length <= 5 * 10^4
    // R
    //  - Boolean => whether if it is anagram
    // E
    //  - isAnagram("anagram", "nagaram") = true
    //  - isAnagram("rat", "car") = false
    //  - isAnagram("car", "rac") = true

    if (s.length !== t.length) return false;

    const p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

    let totalS = 1;
    let totalT = 1;

    for (let i = 0; i < s.length; i++) {
        totalS *= p[s.charCodeAt(0) - 97];
        totalT *= p[t.charCodeAt(0) - 97];
    }

    return totalS === totalT;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
