const question = `
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。
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
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minDiff = Infinity, preValue = null;

    const magic = (node) => {
        if (!node) return;
        magic(node.left);

        if (preValue !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - preValue));
        }

        preValue = node.val;

        magic(node.right);
    }
    magic(root);

    return minDiff
};