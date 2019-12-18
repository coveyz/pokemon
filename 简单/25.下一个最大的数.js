const question = `给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。`

const nextGreaterElement = (num1,num2) => {
  let stack = []
  for (let index = 0; index < num1.length; index++) {
    let smallItem = num1[index]
    let smallIndex = num2.indexOf(smallItem)
    let judge = false
    
    for (let j = smallIndex; j < num2.length; j++) {
      if (smallItem < num2[j]) {
        judge = true
        stack = [...stack,num2[j]]
        break
      } 
    }
    if (!judge) {
      stack = [...stack, -1]
      judge = false
    }
  }
  return stack
}

console.log('====================================');
console.log(nextGreaterElement([2,4],[1,2,3,4]));
console.log('====================================');