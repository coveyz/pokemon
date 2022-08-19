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

console.log(addToArrayForm([1, 2, 0, 0], 34));
