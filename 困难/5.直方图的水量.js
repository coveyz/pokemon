const question = `
给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
`;

const trap1 = (height) => {
	const n = height.length;

	if (n === 0) {
		return 0;
	}

	const leftMax = new Array(n).fill(0);
	leftMax[0] = height[0];
	for (let index = 1; index < n; index++) {
		leftMax[index] = Math.max(leftMax[index - 1], height[index]);
	}
	const rightMax = new Array(n).fill(0);
	rightMax[n - 1] = height[n - 1];
	for (let index = n - 2; index >= 0; index--) {
		rightMax[index] = Math.max(rightMax[index + 1], height[index]);
	}
	let ans = 0;

	for (let index = 0; index < n; index++) {
		ans += Math.min(leftMax[index], rightMax[index]) - height[index];
	}

	return ans;
};

const trap = (height) => {
	let ans = 0;
	let left = 0,
		right = height.length - 1;
	let leftMax = 0,
		rightMax = 0;

	while (left < right) {
		leftMax = Math.max(leftMax, height[left]);
		rightMax = Math.max(rightMax, height[right]);

		if (height[left] < height[right]) {
			ans += leftMax - height[left];
			left += 1;
		} else {
			ans += rightMax - height[right];
			right -= 1;
		}
	}

	return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
