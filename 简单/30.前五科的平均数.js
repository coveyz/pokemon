const question = `给你一个不同学生的分数列表，请按 学生的 id 顺序 返回每个学生 最高的五科 成绩的 平均分。
对于每条 items[i] 记录， items[i][0] 为学生的 id，items[i][1] 为学生的分数。平均分请采用整数除法计算。`

// const highFive = (items) => {
//   const scoreAggregate = items.reduce((acc,cur) => {
//     if (cur[0] === 1) {
//       acc[0].push(cur[1])
//     } else {
//       acc[1].push(cur[1])
//     }
//     return acc
//   },[[],[]]).map((item,idx) => {
//     item.sort((a,b) => b - a)
//     let sum  = 0
//     for (let index = 0; index < 5; index++) {
//       sum += item[index]
//     }
//     return [idx + 1,Math.floor(sum / 5)]
//   })
//   return scoreAggregate
// }

const highFive = (items) => {
  const scoreAggregate = items.reduce((acc,cur) => {
    acc[cur[0]] = acc[cur[0]] ? acc[cur[0]] : []
    acc[cur[0]].push(cur[1])
    return acc
  },[]).map((item,idx) => {
    item.sort((a,b) => b - a)
    let sum  = 0
    for (let index = 0; index < 5; index++) {
      sum += item[index]
    }
    return [idx,Math.floor(sum / 5)]
  }).filter(item => item)
  return scoreAggregate
}

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]));
