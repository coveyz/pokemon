const question = `给你一个字符串 S，请你删去其中的所有元音字母（ 'a'，'e'，'i'，'o'，'u'），并返回这个新字符串`

const isVowel = (word) => {
  return ['a','e','i','o','u'].includes(word)
}

const removeVowels = (str) => {
  const newStrArr =  str.split('')
  const newArr = newStrArr.filter((item) => !isVowel(item))
  return newArr.join('')
}

console.log(removeVowels('leetcodeisacommunityforcoders'));
