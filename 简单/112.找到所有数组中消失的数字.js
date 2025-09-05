const question = `给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
找到所有在 [1, n] 范围之间没有出现在数组中的数字。
您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内`;

const findDisappearedNumbers = (nums) => {
	const MaxNumber = nums.length;
	const minNumber = 1;
	const res = [];
	for (let index = minNumber; index <= MaxNumber; index++) {
		if (!nums.includes(index)) {
			res.push(index);
		}
	}
	return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([2,2]));
