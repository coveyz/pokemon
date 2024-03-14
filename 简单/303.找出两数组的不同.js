const question = `
给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，请你返回一个长度为 2 的列表 answer ，其中：

answer[0] 是 nums1 中所有 不 存在于 nums2 中的 不同 整数组成的列表。
answer[1] 是 nums2 中所有 不 存在于 nums1 中的 不同 整数组成的列表。
注意：列表中的整数可以按 任意 顺序返回。
`


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1 = new Map(), map2 = new Map();
   let index = 0, key = 0;


  while (index < nums1.length || key < nums2.length) {
      if(nums1[index] !== undefined) {
          map1.set(nums1[index], true);
      }

      if (nums2[key] !== undefined) {
          map2.set(nums2[key], true);
      }

      index++;
      key++
  }
  
  index = 0, key = 0;

  // const result = [[], []];
  const container1 = new Set(), container2 = new Set();
  
  while (index < nums1.length || key < nums2.length) {
      if(nums1[index] !== undefined) {
          if (!map2.get(nums1[index])) {
              // result[0].push(nums1[index]);
              container1.add(nums1[index]);
          }
      }

      if (nums2[key]!== undefined) {
          if (!map1.get(nums2[key])) {
              // result[1].push(nums2[key]);
              container2.add(nums2[key]);
          }
      }

      index++;
      key++
  }
  

  
  // return {map1, map2,result}
  return [[...container1], [...container2]]
};
// const nums1 = [1,2,3], nums2 = [2,4,6]
// const nums1 = [1,2,3,3], nums2 = [1,1,2,2]
const nums1 = [80,5,-20,33,26,29], nums2 = [-69,0,-36,52,-84,-34,-67,-100,80]

console.log(test(nums1, nums2)) 