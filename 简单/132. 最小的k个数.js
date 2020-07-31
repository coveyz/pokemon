const question = `输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。`

var getLeastNumbers = function(arr, k) {
  const aftersortOfArr = arr.sort((a,b) => a - b)
  return aftersortOfArr.slice(0,k)
};

console.log(getLeastNumbers([3,2,1],2))