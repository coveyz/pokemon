/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2);

    const container1 = [...set1].filter(item => !set2.has(item)),
     container2 = [...set2].filter(item => !set1.has(item))

    return [container1, container2];
};

const nums1 = [1,2,3], nums2 = [2,4,6];

console.log(findDifference(nums1, nums2));