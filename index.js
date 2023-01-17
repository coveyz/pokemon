/**
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

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
console.log(sumOddLengthSubarrays([1, 2]));
console.log(sumOddLengthSubarrays([10, 11, 12]));
