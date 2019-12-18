const question = `给定一个非负整数 numRows，生成杨辉三角的前 numRows 行`

const generate = (numRows) => {
  const arr = []
  for (let index = 1; index <= numRows; index++) {
    let itemArr = []
    for (let j = 0; j < index; j++) {
      if (j === 0 || j === index - 1) {
        itemArr.push(1)
      } 
      else {
        itemArr.push(arr[index - 2][j - 1] + arr[index - 2][j])
        // console.log(arr,'🥔',arr[index - 2][j - 1],'🔫',arr[index - 2][j],'💣',index,'✨',j)
      }
    }
    arr.push(itemArr)
  }
  return arr
}

console.log('🍌',generate(5))