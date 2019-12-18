const question = `给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
如果不存在最后一个单词，请返回 0 。
说明：一个单词是指由字母组成，但不包含任何空格的字符串。`

const lengthOfLastWord = s => {
  let wordArr = s.split(' ')
  const allzero = wordArr.every(item => item === '')
  if(allzero) return 0 // 全是0 返回就是 0 
  wordArr= wordArr.filter(item => item !== '') // 将数组里面 去掉0
  return wordArr[wordArr.length - 1].length
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("a "))
console.log(lengthOfLastWord("    day "))

