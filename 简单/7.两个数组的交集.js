const question = `
给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
`

var intersection = function (nums1, nums2) {
  const arr3 = [...new Set(nums1)].concat([...new Set(nums2)])
  return arr3.filter((item, index, arr) => {
    return arr.indexOf(item) !== index
  })
};

/**
 ** 双指针
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    const result = [];
    let i = 0, 
        j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums2[j] < nums1[i]) {
            j++;
        } else {
            //* 🎯 只在结果为空 或者 与上一个不同时添加
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
    }

    return result;
};


console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));