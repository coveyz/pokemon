const question = `实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。`

var toLowerCase = (str) => {
   const lowerCase = str.split('').reduce((acc,cur) => {
       acc.push(cur.toLowerCase())
       return acc
   },[])
   return lowerCase.join('')
}


console.log(toLowerCase('Hello'));