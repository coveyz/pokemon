const question = `给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
你可以返回任何满足上述条件的数组作为答案。`

// 第一种
const sortArrayByParityII1 = (array) => {
  let odd = 1, even = 0, newSortArray = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 1) {
      newSortArray[odd] = array[index];
      odd += 2
    } else {
      newSortArray[even] = array[index]
      even += 2
    }
  }
  return newSortArray
}

// 第一种 换成了 reduce
const sortArrayByParityII = (array) => {
  let odd = 1, even = 0
  const newSortArray = array.reduce((acc,cur) => {
    if (cur % 2 === 1) {
      acc[odd] = cur
      odd += 2
    } else {
      acc[even] = cur
      even += 2
    }
    return acc
  },[])
  return newSortArray
}

console.log(sortArrayByParityII([4,2,5,7]));
