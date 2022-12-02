/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
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



console.log(minArray([3,4,5,1,2]))
console.log(minArray([2,2,2,0,1]))