// var addToArrayForm = function(A, K) {
//   let length = A.length,
//       sum = 0
//   for (let index = 0; index < A.length; index++) {

//     sum += Math.pow(10,length - index - 1)  * A[index]
//   }

//   return sum + K
// };

// console.log(addToArrayForm([2,1,5],806));

var addToArrayForm = function (A, K) {
	let add = A.reduce((acc, cur, index, arr) => acc + Math.pow(10, arr.length - index - 1) * cur, 0);

	return add + K;
};

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	k = k.toString();

  //* 兼容 补0
	if (num.length < k.length) {
		const tmp = new Array(k.length - num.length).fill(0);
		num = tmp.concat(num);
	} else if (k.length < num.length) {
		k = k.padStart(num.length, 0);
	}

	let index = num.length - 1,
		flage = 0;

  //* 加法逻辑
	while (index >= 0) {
		const result = num[index] + k[index] * 1 + flage;

		if (result >= 10) {
			flage = 1;
		} else {
			flage = 0;
		}

		num[index] = result % 10;
		index--;
	}

  //* 第一位 是否进位
	if (flage) {
		num.unshift(1);
	}

	return num;
};


console.log(addToArrayForm([1, 2, 0, 0], 34));
