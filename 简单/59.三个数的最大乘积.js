const question = `给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。`;

const maximumProduct = nums => {
  const maxArr = nums.sort((a, b) => a - b);
  const len = maxArr.length
  let positiveInteger = maxArr[0] * maxArr[1] * maxArr[len - 1];
  let negtiveInteger = maxArr[len - 3] * maxArr[len - 2] * maxArr[len - 1]
  return Math.max(positiveInteger,negtiveInteger)
};
console.log(maximumProduct([4,3,2,1]));
