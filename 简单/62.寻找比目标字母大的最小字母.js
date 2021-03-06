const question = `给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。`;

const nextGreatestLetter = (letters, target) => {
  for (let index = 0; index < letters.length; index++) {
    if (letters[index] > target) {
      return letters[index]
    }
  }
  return letters[0]
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
