






var intersection = function (nums1, nums2) {
  const arr3 = [...new Set(nums1)].concat([...new Set(nums2)])
  return arr3.filter((item, index, arr) => {
    return arr.indexOf(item) !== index
  })
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));