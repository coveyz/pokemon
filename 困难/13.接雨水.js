const question = `
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
`

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while(left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            };
            left++;
        } else {
            if (height[right] >= rightMax ) {
                rightMax = height[right];
            } else {   
                water += rightMax - height[right];
            };
            right--;
        }   
    }

    return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6