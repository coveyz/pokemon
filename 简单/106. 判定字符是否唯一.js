const question = `实现一个算法，确定一个字符串 s 的所有字符是否全都不同。`

// 1.0
const isUnique = astr => {
  const res = {}
  for (let index = 0; index < astr.length; index++) {
    const element = astr[index];
    if (res[element]) {
      return false
    } else {
      res[element] = 1
    }
  }
  return true
}

console.log(isUnique("leetcode"))
console.log(isUnique("abc"))