const question = `
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器。
`

// const maxArea = (height) => {
// 	let count = 0;
// 	for (let index = 0; index < height.length; index++) {
// 		const element = height[index];

// 		for (let key = height.length - 1; key > index; key--) {
// 			const item = height[key];
// 			const result = (key - index) * Math.min(element, item);
// 			count = result > count ? result : count;
// 		}
// 	}

// 	return count;
// };

const maxArea = (height) => {
	let start = 0;
	let end = height.length - 1;
	let count = 0;

	while (start <= end) {
		const area = Math.min(height[start], height[end]) * (end - start);
		count = Math.max(area, count);
    //* 当前容器收到 左侧较小的高度限制 移动左侧 寻找更大的容器面积
		if (height[start] <= height[end]) {
			start += 1;
		} else {
			end -= 1;
		}
	}

	return count;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));
