const question = `给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
'A' : Absent，缺勤
'L' : Late，迟到
'P' : Present，到场
如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
你需要根据这个学生的出勤记录判断他是否会被奖赏。`;

const checkRecord1 = str => {
	let aNums = 0;
	for (let index = 0; index < str.length; index++) {
    if (str[index] === 'A') {
      aNums += 1
      if (aNums > 1) return false
    }
    else if (str[index] === 'L' && str[index + 1] === 'L'  && str[index + 2] === 'L') {
      return false
      break
    }
  }
  return true
};

const checkRecord = str => {
  if (str.indexOf('LLL') > -1) return false
  let num = 0
  for (let index = 0; index < str.length; index++) {
    if (str[index] === 'A') {
      num +=1
      if (num > 1) return false
    }
  }
  return true
};

console.log(checkRecord('PPALLP'));
console.log(checkRecord('PPALLL'))
