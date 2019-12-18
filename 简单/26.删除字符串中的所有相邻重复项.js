const question = `给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
在 S 上反复执行重复项删除操作，直到无法继续删除。
在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。`


const tip = `前面两个方法 当数据比较多的时候 会时间比较长  将解构换成push  就好了`


// 1
const removeDuplicates = (S) => {
  const Transformation = S.split('')
  const res = Transformation.reduce((acc,cur) => {
    if (!acc.length || acc[acc.length - 1] !== cur) {
      acc = [...acc,cur]
    } else {
      acc.pop()
    }
    return acc
  },[])
  return res.join('')
}

//2 
// const removeDuplicates = (S) => {
//   let stack = []
//   for (let index = 0; index < S.length; index++) {
//     if (!stack.length || stack[stack.length - 1] !== S[index]) {
//       stack = [...stack,S[index]]
//     } else {
//       stack.pop()
//     }
//   }
//   return stack.join('')
// }

// 3
// const removeDuplicates = (S) => {
//   const stack = []
 
//    for (let c of S) {
//      if (stack[stack.length - 1] === c) {
//        stack.pop()
//      } else {
//        stack.push(c)
//      }
//    }
 
//    return stack.join('')
//  }

console.log(removeDuplicates("abbaca"));