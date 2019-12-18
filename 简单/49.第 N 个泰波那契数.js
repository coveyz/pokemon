const question = `泰波那契序列 Tn 定义如下： 
T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
给你整数 n，请返回第 n 个泰波那契数 Tn 的值。`

const tribonacci = num => {
  let arr = [0,1,1]
  if (num <= 2) return arr[num]

  for (let index = 3; index <= num; index++) {
    arr[index] = arr[index - 1] + arr[index - 2] +  arr[index - 3]
  }
  return arr[num]
}

console.log(tribonacci(25))