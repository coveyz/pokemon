const question = `给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
说明:
初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。`

const merge = (arr1,num1,arr2,num2) => {
  return arr1.splice(0,num1).concat(arr2.splice(0,num2)).sort((a,b) => a - b )
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))