
/* 第一种 */
var addDigits = function(num) {
  var Transformation = num.toString().split('')
  const add =Transformation.reduce((acc,curr,index,arr) => {
    if (arr.length > 1) {
      const haha = acc + Number(curr)
      if (haha > 9) {
        return addDigits(haha)
      } else {
        return haha
      }
    } else {
      return acc + Number(curr)
    }
  },0)
  return add
};

console.log(addDigits(38));



/* 第二种 */
// var addDigits = function(num) {
//   if (num % 9 ==0 && num !=0) {
//     return 9
//   }
//   return num % 9
// };

// console.log(addDigits(38));
