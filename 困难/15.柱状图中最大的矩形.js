const question = `
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
`


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);

            // console.log('info', {height, width, maxArea, cur: heights[i], index: i,stack});
        };

        stack.push(i);
    }

    return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3])); // 10
// console.log(largestRectangleArea([2,4])); // 4