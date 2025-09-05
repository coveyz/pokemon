const question = `给你一个整数 n，请你返回一个含 n 个字符的字符串，其中每种字符在该字符串中都恰好出现 奇数次 。
返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，则返回其中任意一个即可。`

const generateTheString = num => {
  var str = ''
  if (num % 2) {
    // 基数
    for (let index = 0; index < num; index++) {
      str += 'a'
    }
  } else {
    // 偶数
    for (let index = 0; index < num - 1; index++) {
      str += 'a'
    }
    str += 'b'
  }
  return str
}

console.log(generateTheString(5))
console.log(generateTheString(4))
console.log(generateTheString(7))
