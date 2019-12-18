const question = `给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。`;

const plusOne = digits => {
  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index] ++
    digits[index] %= 10
    if (digits[index] !== 0) {
      return digits
    }
  }
  digits = new Array(digits.length + 1).fill(0)
  digits[0] = 1
  return digits
};

console.log(plusOne([9,9]));
