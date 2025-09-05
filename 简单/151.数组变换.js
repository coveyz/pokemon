const question = `首先，给你一个初始数组 arr。然后，每天你都要根据前一天的数组生成一个新的数组。

第 i 天所生成的数组，是由你对第 i-1 天的数组进行如下操作所得的：

假如一个元素小于它的左右邻居，那么该元素自增 1。
假如一个元素大于它的左右邻居，那么该元素自减 1。
首、尾元素 永不 改变。
过些时日，你会发现数组将会不再发生变化，请返回最终所得到的数组。`

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function (arr, target) {
	const newArray = arr.map((item) => item);

	for (let index = 1; index < arr.length - 1; index++) {
		var element = arr[index];
		var leftElement = arr[index - 1];
		var rightElement = arr[index + 1];

		if (element > leftElement && element > rightElement) {
			newArray[index] -= 1;
		} else if (element < leftElement && element < rightElement) {
			newArray[index] += 1;
		}
	}

	if (JSON.stringify(newArray) !== JSON.stringify(target)) {
		return transformArray(
			newArray,
			newArray.map((item) => item)
		);
	}
	return newArray;
};