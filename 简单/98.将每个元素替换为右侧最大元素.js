const question = `给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
完成所有替换操作后，请你返回这个数组。`;

const replaceElements = (arr) => {
  let maxArr= [],maxNumber = -1
	for (let index = arr.length - 1; index >= 0; index --) {
    maxArr[index] = maxNumber
    maxNumber = arr[index] > maxNumber ? arr[index] : maxNumber
  }

  return maxArr
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
