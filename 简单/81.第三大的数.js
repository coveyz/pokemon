const question = `给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。`;

const thirdMax1 = nums => {
	let arrSort = nums.sort((a, b) => b - a);
	arrSort = [...new Set(arrSort)];
	if (arrSort.length < 3) return arrSort[0];
	return arrSort[2];
};

/**
 **  O(n) 时间复杂度的解法
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax2 = function(nums) {
    let first = -Infinity,
        second = -Infinity,
        third = -Infinity;

    for(let num of nums) {
        if (num === first || num === second || num === third) continue;

        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third)  {
            third = num;
        };
    };

    return third === -Infinity ? first : third;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 1, 2]));

