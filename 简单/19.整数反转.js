const question = `给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。`

var reverse = function(x) {
  if (x < 0) {
    x = Math.abs(x).toString().split('').reverse()
    x.unshift('-')
  } else {
    x = x.toString().split('').reverse()
  }
  x =  parseInt(x.join(''))
  if ( x > Math.pow(-2,31) && x < Math.pow(2,31) - 1) {
    return x
  } else {
    return 0
  }
};

console.log(reverse(123));
