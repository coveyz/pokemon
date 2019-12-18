const question = `给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。你可以返回满足此条件的任何数组作为答案。`

const sortArrayByParity = (array) => {
  const newSort = array.reduce((acc,cur) => {
    if (cur % 2 === 0) {
      acc.unshift(cur)
    } else {
      acc.push(cur)
    }
    return acc
  },[])
  return newSort
}

console.log(sortArrayByParity([3,1,2,4]));