const question = `
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
`;

// const merge = (arr1,num1,arr2,num2) => {
//   return arr1.splice(0,num1).concat(arr2.splice(0,num2)).sort((a,b) => a - b )
// }

/**
 * 合并&排序
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	// nums1.splice(m);
	// nums2.splice(n);
	// nums1.splice(m, 1, ...nums2);
	nums1.splice(m, nums1.length - m, ...nums2);

	return nums1.sort((a, b) => a - b);
};

/**
 * 双指针
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let p1 = 0,
		p2 = 0,
		cur;
	const sorted = new Array(m + n).fill(0);

	while (p1 < m || p2 < n) {
		if (p1 === m) {
			cur = nums2[p2++];
		} else if (p2 === n) {
			cur = nums1[p1++];
		} else if (nums1[p1] > nums2[p2]) {
			cur = nums2[p2++];
		} else {
			cur = nums1[p1++];
		}

		sorted[p1 + p2 - 1] = cur;
	}

	console.log(sorted);

	for (let index = 0; index < m + n; index++) {
		nums1[index] = sorted[index];
	}
};


/**
 * 指针
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    let k = m + n - 1;

    while(i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        };
        k--;
    };

    while(j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
};


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
