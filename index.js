/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	salary.sort((a, b) => a - b);
	const sum = salary.reduce((acc, cur, index, arr) => {
		if (index === 0 || index === arr.length - 1) {
			acc += 0;
		} else {
			acc += cur;
		}
		return acc;
	}, 0);
	return sum / (salary.length - 2);
};

const salary = [4000, 3000, 1000, 2000];

console.log(average(salary));
