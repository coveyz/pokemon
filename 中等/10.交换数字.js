const question = `编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。`

const swapNumbers = numbers => {
  return numbers.reverse()
}

console.log(swapNumbers([1,2]))
console.log(swapNumbers([2147483647,0]))