const question = `给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false`;

const uniqueOccurrences = arr => {
  const numsArr = arr.reduce((acc,cur) => {
    if (acc[cur]) {
      acc[cur] += 1
    } else {
      acc[cur] = 1
    }
    return acc
  },{})
  
  let saveNums = []
  for (const key in numsArr) {
    if (!saveNums.includes(numsArr[key])) {
      saveNums.push(numsArr[key])
    } else {
      return false
    }
  }
  return true
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
