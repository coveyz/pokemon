/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
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

// const nums1 = [4, 1, 2],nums2 = [1, 3, 4, 2];
const nums1 = [2,4], nums2 = [1,2,3,4]
// const nums1 = [2, 1, 3],nums2 = [2, 3, 1];

console.log(nextGreaterElement(nums1, nums2));
