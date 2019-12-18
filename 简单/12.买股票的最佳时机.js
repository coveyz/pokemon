var maxProfit = function (prices) {
  let minNum = prices[0]
  let maxNum = 0
  let i = 0
  while (i < prices.length) {
    console.log(minNum, maxNum);
    minNum = Math.min(minNum, prices[i])
    maxNum = Math.max(maxNum, prices[i] - minNum)
    i++
  }
  return maxNum
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));