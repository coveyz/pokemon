const question = `自除数 是指可以被它包含的每一位数除尽的数。
例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
还有，自除数不允许包含 0 。
给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。`;

const selfDividingNumbers = (left, right) => {
  let arr = []
  for (let index = left; index < right + 1; index++) {
    const curItem = index.toString().split('').map(_ => +_)
    if (!curItem.includes(0) && curItem.every(item => index % item === 0)) {
      arr.push(index)
    }
  }
  return arr
};

console.log(selfDividingNumbers(11, 22));
