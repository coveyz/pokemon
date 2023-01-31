/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let flage = 0,
		pos = digits.length - 1;

	while (pos >= 0) {
		const result = pos === digits.length - 1 ? digits[pos] + 1 : digits[pos];

		if (result < 10) {
			digits[pos] = result + flage;

			if (digits[pos] === 10) {
				digits[pos] = 0;
				flage = 1;
			} else {
				flage = 0;
				break;
			}
		} else {
			digits[pos] = result - 10;
			flage = 1;
		}

		pos--;
	}

	if (flage) {
		digits.unshift(1);
	}

	return digits;
};

// const digits = [1, 2, 3];
// const digits = [4, 3, 2, 1];

console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([8, 9, 9, 9]));
