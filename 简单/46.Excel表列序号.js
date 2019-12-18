const question = `给定一个Excel表格中的列名称，返回其相应的列序号。`;

const titleToNumber = str => {
  const map = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  let len = str.length 
  let sum = 0
  for (const key of str) {
    if (len > 1) {
      sum += map.indexOf(key) * Math.pow(26,len -1 )
      len --
    } else {
      sum += map.indexOf(key)
    }
  }
  return sum
};

console.log(titleToNumber('ZB'));
