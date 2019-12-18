const question = `给你一个正整数的数组 A。
然后计算 S，使其等于数组 A 当中最小的那个元素各个数位上数字之和。
最后，假如 S 所得计算结果是 奇数 的请你返回 0，否则请返回 1`

const sumOfDigits = A => {
  const newDigits = A.sort((a,b) => a - b)[0].toString().split('').reduce((acc,cur) => acc += Number(cur),0)
  return newDigits%2 ? 0 : 1
}

console.log(sumOfDigits([34,23,1,24,75,33,54,8]));
