const question = `把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。 `;

const minArray = (numbers) => {
	return numbers.sort((a, b) => a - b)[0];
};

/**
 ** Math方法
 * @param {number[]} numbers
 * @return {number}
 */
var minArray2 = function (numbers) {
	return Math.min(...numbers);
};


/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray3 = function (numbers) {
  let left = 0,right = numbers.length;

  while (left <= right) {
    const middleIndex = (right + left) >> 1;
    if (numbers[middleIndex] < numbers[right]) {
      right = middleIndex 
    } else if (numbers[middleIndex] > numbers[right]) {
      left = middleIndex + 1
    } else {
      right--;
    }
  }

  return numbers[left]
};


console.log(minArray([3, 4, 5, 1, 2]));
