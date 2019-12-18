const question = `学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。`;

const heightChecker = heights => {
  const oldHeight = heights.map(item => item)
  const sortHegiht = heights.sort((a,b) => a -b)

  let count = 0
  for (let index = 0; index < oldHeight.length; index++) {
    if (oldHeight[index] !== sortHegiht[index]) {
      count = count + 1
    }
  }
  return count 
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
