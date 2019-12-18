const question = `给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。`

const isAnagram = (s,t) => {
  if (s.length !== t.length) return false
  const newT = t.split('')
  const anagram = s.split('').reduce((acc,cur,index) => {
    acc[cur] ? acc[cur] ++ : acc[cur] = 1
    acc[newT[index]] ? acc[newT[index]] -- : acc[newT[index]] = -1
    return acc
  },{})
  return Object.keys(anagram).every(item => anagram[item] === 0)
}

console.log(isAnagram('anagram','nagaram'));