/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let left = 0, right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1;
    } else { 
      right = middle - 1;
    }
  }

  return left;
};

console.log('findPeakElement=>', findPeakElement([1, 2, 3, 1]));
console.log('findPeakElement=>', findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log('findPeakElement=>', findPeakElement([1, 2, 3]));
