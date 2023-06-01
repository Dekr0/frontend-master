function isLetter(c: string): boolean {
    const code = c.charCodeAt(0);
    return (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) || (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0));
}

function isPalindrome(s: string): boolean {
    // P -> string; upper case, lower case, non-alphanumeric characters, number
    //  - only need letters, remove all others
    // R -> boolean; true -> it's a palindrome; false -> it's not
    //  What is palindrom? read the same forward and the same backward
    //
    s = s.toLowerCase();

    let is = true;
    let low = 0;
    let high = s.length - 1;
    while (low < high) {
       // Check if it's a letter 
       if (isLetter(s[low]) && isLetter(s[high])) {
           if (s[low] !== s[high]) return false;
           low++;
           high--;
       } else if (isLetter(s[low])) {
           high--;
       } else if (isLetter(s[high])) {
           low++;
       } else {
           high--;
           low++;
       }
    }

    return is;
}

// Ease of use
function isPalindromeR(s: string): boolean {
   s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
   for (let low = 0, high = s.length; low < high; low++, high--) {
       if (s[low] !== s[high]) return false;
   }

   return true;
}
