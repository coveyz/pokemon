/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const old =  s.replace(/\W|_/g, '').toLocaleLowerCase();
    const reversed = old.split('').reverse().join('');
    return old === reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race a car"));    // false