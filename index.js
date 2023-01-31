/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	k = k.toString();

	if (num.length < k.length) {
		const tmp = new Array(k.length - num.length).fill(0);
		num = tmp.concat(num);
	} else if (k.length < num.length) {
		k = k.padStart(num.length, 0);
	}

	let index = num.length - 1,
		flage = 0;

	while (index >= 0) {
		const result = num[index] + k[index] * 1 + flage;

		if (result >= 10) {
			flage = 1;
		} else {
			flage = 0;
		}

		num[index] = result % 10;
		index--;
	}

	if (flage) {
		num.unshift(1);
	}

	return num;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
// console.log(addToArrayForm([2, 7, 4], 181));
// console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([0], 23));
