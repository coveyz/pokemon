const question = `从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
`;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
	/**
	 * 最大 - 最小 > 5 false
	 */
	let sorted = nums.sort((a, b) => a - b),
		joker = 0;

	for (let index = 0; index < sorted.length - 1; index++) {
		let cur = sorted[index],
			next = sorted[index + 1];
		//* 大小王
		if (cur === 0) joker++;
		else if (cur === next) return false;
		else if (next - cur > 1) {
			let needJoker = next - cur - 1; //* 差1 是不需要的
			joker -= needJoker;
			if (joker < 0) return false;
		} else {
			continue;
		}
	}

	if (joker < 0) {
		return false;
	}

	return true;
};

const nums = [1, 2, 3, 4, 5];
// const nums = [0, 0, 8, 5, 4];
// const nums = [0, 0, 1, 2, 5];

console.log(isStraight(nums));
