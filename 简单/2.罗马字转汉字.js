var test = (num) => {
  var nums = [1, 5, 10, 50, 100, 500, 1000]
  var RomeDigital = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  var Rome = []
  for (let index = 0; index < num.length; index++) {
    var Digital = RomeDigital.indexOf(num[index])
    var res = nums[Digital]
    Rome.push(res)
  }

  const he = Rome.reduce((res,cur,index,arr) => {
    if (index == arr.length -1 ) return res + cur
    return cur < arr[index + 1] ? res -cur : res + cur
  },0)
  
  return he
}

console.log(test('LVIII'));
