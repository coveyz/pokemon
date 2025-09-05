const question = `给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。`;

const average = (salary) => {
	const maxSalary = Math.max(...salary);
	const minSalary = Math.min(...salary);
	const averageSalary = salary.reduce((acc, cur) => {
		if (cur !== maxSalary && cur !== minSalary) {
			acc += cur;
		}
		return acc;
	}, 0);
	return averageSalary / (salary.length - 2)
};

/**
 ** 排序 求和计算
 * @param {number[]} salary
 * @return {number}
 */
var average1 = function (salary) {
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

// console.log(average([4000, 3000, 1000, 2000]));
console.log(average([48000,59000,99000,13000,78000,45000,31000,17000,39000,37000,93000,77000,33000,28000,4000,54000,67000,6000,1000,11000]));
