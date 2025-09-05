const question = `
给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。
`;
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	const maxNumber = Math.max(...salary),
		minNumber = Math.min(...salary);
	let count = 0;
	return (
		salary.reduce((acc, cur) => {
			if (cur !== maxNumber && cur !== minNumber) {
				acc += cur;
			}
			if (cur === maxNumber || cur === minNumber) {
				count += 1;
			}
			return acc;
		}, 0) /
		(salary.length - count)
	);
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]));
console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
