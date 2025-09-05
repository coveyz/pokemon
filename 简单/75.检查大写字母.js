const question = `给定一个单词，你需要判断单词的大写使用是否正确。
我们定义，在以下情况时，单词的大写用法是正确的：
全部字母都是大写，比如"USA"。
单词中所有字母都不是大写，比如"leetcode"。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
否则，我们定义这个单词没有正确使用大写字母。`

const judgeCapitalLetter = str => {
  return /[A-Z]/.test(str)
}

const detectCapitalUse = word => {
  const len = word.length // 一共多少个单词
  let requirementsNum = 0 // 符合条件的 个数
  let fistWord = word[0] // 首字母
  for (let index = 0; index < word.length; index++) {
    if (judgeCapitalLetter(word[index])) {
      requirementsNum +=1
    }
  }
  if (requirementsNum === len || requirementsNum === 0 || (judgeCapitalLetter(fistWord) && requirementsNum === 1)) {
    return true
  }
  return false
}

console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('leetcode'))
console.log(detectCapitalUse('Google'))
console.log(detectCapitalUse('FlaG'))