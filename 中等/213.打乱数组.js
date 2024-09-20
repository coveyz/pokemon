const question = `
给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果
`

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums];
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = [...this.original];

    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffle = [...this.nums];

    for (let index = 0; index < shuffle.length; index++) {
        const randomIndex = index + Math.floor(Math.random() * (shuffle.length - index)); //* 洗牌
        [shuffle[index], shuffle[randomIndex]] = [shuffle[randomIndex], shuffle[index]];
    }

    return shuffle;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */