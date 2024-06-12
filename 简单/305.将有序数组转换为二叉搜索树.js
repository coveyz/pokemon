const question = `
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
`

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const sorted = (left,right) => {
        const middle = (left + right) >> 1, node = new TreeNode(middle);
        node.left = sorted(left,middle -1);
        node.right = sorted(middle +1, right);

        return node;
    }

    return sorted(0, nums.length - 1);
};