/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
	const sum = chalk.reduce((acc, cur) => acc + cur, 0);
	let marker = k % sum;
	if (marker === 0) return 0;

	for (let index = 0; index < chalk.length; index++) {
		const element = chalk[index];
		if (marker < element) return index;
		marker -= element;
	}
};

// const chalk = [5, 1, 5],k = 22;
const chalk = [3, 4, 1, 2],
	k = 25;

console.log(chalkReplacer(chalk, k));
