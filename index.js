/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    const getNext = (n) => {
        let sum = 0;

        console.log('getNext-before=>', n)

        while(n > 0) {
            const digit = n % 10;
            console.log('digit=>', digit)
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        console.log('getNext=>', {sum, n})
        return sum;
    }

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};

console.log(isHappy(19))
// console.log(isHappy(2))