/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	// let total = 0;

	// for (let index = 1; index <= n; index++) {
	// 	total += index;
	// 	// if (total === n) return index;
	// 	// if (total > n) return index - 1;
	// 	if (total >= n) return total === n ? index : index - 1;
	// }
	let left = 1,
		right = n;

	while (left < right) {
		const middle = Math.floor((right - left + 1) / 2) + left,
			total = (middle * (middle + 1)) / 2;

		if (total === n) return middle;
		else if (total <= n) {
			left = middle;
		} else {
			right = middle - 1;
		}
		console.log({ left, right, middle });
	}

	return left;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(1));
console.log(arrangeCoins(2));
