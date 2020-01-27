const question = `给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
请你找到并返回这个整数`;

const findSpecialInteger = arr => {
  if(arr.length === 1) return arr[0]
  let resList = []
  let len = arr.length
  const integerObj = arr.reduce((acc,cur) => {
    if (acc[cur]) {
      acc[cur] +=1
      if (acc[cur] / len > 0.25) {
        return resList.push(cur)
      }
    } else {
      acc[cur] = 1
    }
    return acc
  },{})
  return resList
}

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
console.log(findSpecialInteger([1,1,2,2,3,3,3,3]))