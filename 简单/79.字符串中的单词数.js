const question = `统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。请注意，你可以假定字符串里不包括任何不可打印的字符。`;

const countSegments = str => {
  const newArr = str.split(' ')
  return newArr.reduce((acc,cur,index) => {
    acc = cur === '' ? acc + 0 : acc + 1
    return acc
  },0)
};

console.log(countSegments('Hello, my name is John'));
console.log(countSegments('                '));
