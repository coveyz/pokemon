const question = `在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
返回重复了 N 次的那个元素。`;

const repeatedNTimes1 = arr => {
  const occurrencesObj = arr.reduce((acc,cur) => {
    if (acc[cur]) {
      acc[cur] += 1
    } else {
      acc[cur] = 1
    }
    return acc
  },{})
  for (const key in occurrencesObj) {
    if (occurrencesObj[key] >= (arr.length / 2)) {
      return key
    }
  }
}

const repeatedNTimes = arr => {
  const obj = {}
  for (let index = 0; index < arr.length; index++) {
    const curItem = arr[index]
    if (obj[curItem]) {
      obj[curItem] += 1
      if (obj[curItem] >= (arr.length / 2)) {
        return curItem
      }
    } else {
      obj[curItem] = 1
    }
  }
}

console.log(repeatedNTimes([1,2,3,3]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));

