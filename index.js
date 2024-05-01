/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const getNext = (n) => {
    let sum = 0;

    while ( n > 0) { 
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10)
    }

    return sum;
  }

  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
};

console.log(isHappy(19))
console.log(isHappy(2))
console.log(isHappy(7))