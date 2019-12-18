const question = `小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？`

const game = (guess,answer) => {
  const correctNum = guess.reduce((acc,cur,num) => {
    for (let index = 0; index < answer.length; index++) {
      if (cur === answer[index] && num === index) {
        acc = acc + 1
        break;
      }
    }
    return acc
  }, 0)
  return correctNum
}

console.log(game([1,2,3],[1,2,3]))