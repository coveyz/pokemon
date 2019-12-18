const question = `给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
如果不能形成任何面积不为零的三角形，返回 0`


const largestPerimeter = (A) => {
  let switchJudge = true
  const sideLength = A.sort((a,b) => b - a)
  const perimeter = sideLength.reduce((acc,cur,index) => {
    if (cur < sideLength[index + 1] + sideLength [index + 2] && index !== sideLength.length - 2 && switchJudge) {
       acc = cur + sideLength[index+1] + sideLength[index + 2]
       switchJudge = false
       return acc
    } 
    return acc
  }, 0)
  return perimeter
}

console.log(largestPerimeter([1,2,1]));
