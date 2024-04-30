/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const target = nums1.length >= nums2.length ? nums1 : nums2, 
    compare = nums1.length >= nums2.length ? nums2 : nums1;

  const map = target.reduce((acc,cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());


  return compare.reduce((total,item) => {
    if (map.has(item) && map.get(item) > 0) {
      total.push(item);
      map.set(item, map.get(item) - 1)
    }
    return total;
  }, [])  
};


console.log(intersect([1,2,2,1],[2,2]))
console.log(intersect([1,2],[1,1]))