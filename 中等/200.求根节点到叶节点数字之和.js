const question = `
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。
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
var sumNumbers = function(root) {
    const dfs = (node, sum) => {
        if (!node) return 0;

        const currentSum = sum * 10 + node.val;

        if (!node.left && !node.right) return currentSum;

        const leftItem = dfs(node.left, currentSum);
        const rightItem = dfs(node.right, currentSum);

        return leftItem + rightItem
    }

    return dfs(root,0)
};