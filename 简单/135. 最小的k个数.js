const question = `输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。`;

var getLeastNumbers = function (arr, k) {
	const aftersortOfArr = arr.sort((a, b) => a - b);
	return aftersortOfArr.slice(0, k);
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
	const quickSort = (arr, start, end) => {
		//* 哨兵
		arr[0] = arr[start];

		while (start < end) {
			//* right 指针向左遍历，直到找到第一个比哨兵 num要小的数，因为要替换到左边
			while (start < end && arr[end] >= arr[0]) {
				end--;
			}
			arr[start] = arr[end];
			//* left 指针向右遍历，直到找到第一个比哨兵 num要小的数，因为要替换到右边
			while (start < end && arr[start] <= arr[0]) {
				start++;
			}
			arr[end] = arr[start];
		}

		arr[start] = arr[0];
		return start;
	};

	const sorted = (arr, start, end) => {
		if (start < end) {
			const now = quickSort(arr, start, end); //* 找到中间位置
			// console.log('now=>', now);
			sorted(arr, start, now - 1); //* 左继续
			sorted(arr, now + 1, end); //* 右继续
		}
	};

	//* 数组真实数据从下表 1 开始，下标0放哨兵
	//* 初始化 -1
	arr.unshift(-1);
	sorted(arr, 1, arr.length - 1);

	// return arr;
	return arr.slice(1, k + 1);
};

console.log(getLeastNumbers([3, 2, 1], 2));
