/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    const temporary = [];
    for (let i = 1; i <= s.length; i++) {
      temporary.push(s[s.length - i]);
    }
    for (let j = 0; j < s.length; j++) {
      s[j] = temporary[j];
    }
    return s
};
