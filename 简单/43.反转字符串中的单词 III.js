const question = `给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。`

const reverseWords = str => {
  return str.split(' ').reduce((acc,cur,index) => {
    acc.push(cur.split('').reverse().join(''))
    return acc
  },[]).join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))