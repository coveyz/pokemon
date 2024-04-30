const question = `给定两个数组，编写一个函数来计算它们的交集。`

// 第一种
const intersect1 = (nums1,nums2) => { 
  let arr = []
 nums1.forEach((element,index) => {
    let idx = nums2.indexOf(element)
    if (idx > -1) {
      arr = [...arr,element]
      nums2.splice(idx,1)
    }
  });
  return arr
}

// 第二种
const intersect2 = (nums1,nums2) => { 
  const text = nums1.reduce((acc,cur)=> {
    let idx = nums2.indexOf(cur)
    if (idx > -1) {
      acc = [...acc,cur]
      nums2.splice(idx,1)
    }
    return acc
  },[])
  return text
}

//第三种
const intersect3 = (nums1,nums2) => { 
  let result = []
  for (const num of nums1) {
    let idx = nums2.indexOf(num)
    if (idx > -1) {
      result.push(num)
      nums2.splice(idx,1)
    }
  }
  return result
}

/**
 * 第四种
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



// console.log(intersect1([4,9,5],[9,4,9,8,4]));
// console.log(intersect2([4,9,5],[9,4,9,8,4]));
console.log(intersect3([4,9,5],[9,4,9,8,4]));
