 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 1) return n === 1;
    if (n %3 !== 0) return false

    return isPowerOfThree(Math.floor(n / 3))
};


console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(45))