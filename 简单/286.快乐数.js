const question = `
编写一个算法来判断一个数 n 是不是快乐数。
「快乐数」 定义为：
对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
`;

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	if (n === 1) return true;
	else if (n < 10) return false;

	const newNumber = n.toString();

	let count = 0;

	for (let index = 0; index < newNumber.length; index++) {
		const element = newNumber[index];
		count = count + Math.pow(+element, 2);
	}

	return isHappy(count);
};


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};

  while(n !== 1) {
      if (map[n]) {
          return false
      }
      map[n] = true;
      n = n.toString()
          .split('')
          .map(item => item ** 2)
          .reduce((acc,cur) => acc + cur, 0)
  }

  return true
};

/**
 * hash
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

/**
 ** 双指针
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let getNext = (n) => {
        let totalSum = 0;

        while(n > 0) {
            const digit = n % 10;
            totalSum += digit * digit;
            n = Math.floor(n / 10);
        }

        return totalSum;
    };

    let fast = n;
    let slow = n;

    while(true) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));

        if (slow === fast) break;
    };

    return slow === 1;
};


const n = 7;

console.log(isHappy(n));
