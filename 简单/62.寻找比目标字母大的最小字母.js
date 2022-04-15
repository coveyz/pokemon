const question = `给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。`;

const nextGreatestLetter = (letters, target) => {
	for (let index = 0; index < letters.length; index++) {
		if (letters[index] > target) {
			return letters[index];
		}
	}
	return letters[0];
};

//* 二分查找
var nextGreatestLetter2 = function (letters, target) {
	if (letters[letters.length - 1] <= target) return letters[0];

	let left = 0,
		right = letters.length - 1;

	while (left < right) {
		const middleIndex = Math.floor((right - left) / 2) + left;
		// console.log('middleIndex=>', middleIndex);
		const middleItem = letters[middleIndex];

		if (middleItem > target) {
			right = middleIndex;
		} else {
			left = middleIndex + 1;
		}
	}

	return letters[left];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
