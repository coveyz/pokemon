const question = `我们把符合下列属性的数组 A 称作山脉：
A.length >= 3
存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。`

// 1
const peakIndexInMountainArray1 = (arr) => {
  if(arr.length === 1) return 0
  
  const peak = arr.reduce((acc,cur,index) => {
    if (arr[index -1] < cur && cur > arr[index + 1]) {
      acc.push(index)
    }
    return acc
  },[])
  return peak[0]
}

// 2
const peakIndexInMountainArray3 = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index - 1] < arr[index] && arr[index] > arr[index + 1]) {
      return index
    }
  }
}
const peakIndexInMountainArray = (A) => {
  return A.indexOf(Math.max(...A))
}

console.log(peakIndexInMountainArray([0,1,0]));
