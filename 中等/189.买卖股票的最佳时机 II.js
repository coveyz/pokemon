const question = `
给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
返回 你能获得的 最大 利润 。
`

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //* 只要今天的 比 昨天的高 就买入， 利润就算上

  let profit = 0;

  for (let index = 1; index < prices.length; index++) {
    const price = prices[index], prePrice = prices[index - 1];
    // console.log({ prePrice, price })

    if (price > prePrice) {
      profit += (price - prePrice);
    }

  }

  return profit
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7,1,5,3,6,4]))