const question = `给出一个区间的集合，请合并所有重叠的区间。`

const merge = (intervals) => {
  // 我先 给拍个序列
  const newMergeOrder = intervals.sort((a,b) => a[0] - b[0]) 
  let arr = []
  for (let index = 0; index < newMergeOrder.length; index++) {
    let curItem = newMergeOrder[index]
    if (index === 0) arr.push(curItem)
    let arrLastItem = arr[arr.length - 1]
    // 判断是否有交集
    if(Math.max(curItem[0],arrLastItem[0]) <= Math.min(curItem[1],arrLastItem[1])) {
      arrLastItem[0] = Math.min(curItem[0],arrLastItem[0])
      arrLastItem[1] = Math.max(curItem[1],arrLastItem[1])
    } 
    else {
      arr.push(curItem)
    }
  }
  return arr
}



console.log(merge([[1,3],[8,10],[2,6],[15,18]]));