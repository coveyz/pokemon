const question = `
给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
子数组 定义为原数组中的一个连续子序列。
请你返回 arr 中 所有奇数长度子数组的和 。
`

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const n = arr.length,prefixSums = new Array(n + 1).fill(0);

  for (let index = 0; index < n; index++) {
    prefixSums[index + 1] = prefixSums[index] + arr[index]
  }

  let sum = 0;

  for (let start = 0; start < n; start++) {
    for (let key = 1; start + key <= n; key+= 2) {
      const end = start + key - 1;
      sum += prefixSums[end + 1] - prefixSums[start]
    }
  }
};


/**
 ** 递归
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
	// const ans = [];
	let result = 0;

	const sum = (arr) => {
		return arr.reduce((acc, cur) => acc + cur, 0);
	};

	const dns = (cur) => {
		if (cur >= arr.length) {
			if (arr.length % 2) {
        // ans.push(arr.slice())
        result += sum(arr.slice())
      };
			return;
		}

		let left = 0,
			right = cur;

		while (right <= arr.length) {
			// ans.push(arr.slice(left, right));
			result += sum(arr.slice(left, right));
			left++;
			right++;
		}
		dns(cur + 2);
	};

	dns(1);

	// return { ans, result };
  return result
};



const arr = [1, 4, 2, 5, 3];

console.log(sumOddLengthSubarrays(arr));
