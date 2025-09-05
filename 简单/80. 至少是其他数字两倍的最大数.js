const question = `至少是其他数字两倍的最大数`

const dominantIndex1 = nums => {
  const newArr = nums.map(item => item)
  const maxItem = nums.sort((a,b) => b -a)[0]
  let key = -1
  for (let index = 0; index < newArr.length; index++) {
    if (maxItem === newArr[index]) {
      console.log(newArr)
      key = index
    }
    if (newArr[index] !== maxItem && newArr[index] !== 0) {
      if (maxItem / newArr[index] < 2) {
        return -1
      }
    }
  }
  return key
}

const dominantIndex = nums => {
  if (nums.length === 1) return 0
  const oldNums = nums.map(item => item)
  const sortArr = nums.sort((a,b) => b -a)
  return sortArr[0] / sortArr[1] >= 2 ? oldNums.indexOf(sortArr[0]) : -1
}

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([0,0,0,1]))
console.log(dominantIndex([1, 2, 3, 4]))
console.log(dominantIndex([1]))