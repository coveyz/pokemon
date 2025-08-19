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


/**
 ** 哈希表
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement2 = function (nums1, nums2) {
	const box = [],
		map = nums2.reduce((acc, cur, index) => {
			acc[cur] = index;
			return acc;
		}, {});

	for (let index = 0; index < nums1.length; index++) {
		let pos = 0,
			maxItem = null;
		const element = nums1[index];
		pos = map[element] ? map[element] : 0;
		// console.log('element=>', element, 'pos=>', pos, 'map=>', map);

		for (let key = pos; key < nums2.length; key++) {
			const item = nums2[key];
			// console.log('item=>', item);
			if (item > element) {
				maxItem = item;
				box.push(maxItem);
				break;
			}
		}

		if (maxItem === null) {
			box.push(-1);
		}
		maxItem = null;
	}

	return box;
};

/**
 * 单调栈
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement3 = function(nums1, nums2) {
    const next = new Map(),
        stack = [];

    for (let x of nums2) {
        while (stack.length && stack[stack.length - 1] < x) {
            next.set(stack.pop(), x);
        };
        stack.push(x);
    };

    while(stack.length) {
        next.set(stack.pop(), -1);
    };

    return nums1.map(item => next.get(item));
};



console.log('====================================');
console.log(nextGreaterElement([2,4],[1,2,3,4]));
console.log('====================================');