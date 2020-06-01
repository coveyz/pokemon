const question = `给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。`;

const numberOfSteps = (num) => {
  var optionNum = 0
  while (num > 0) {
    if (num % 2) {
      num -= 1
    } else {
      num = num / 2
    }
    optionNum += 1
  }
  return optionNum
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
