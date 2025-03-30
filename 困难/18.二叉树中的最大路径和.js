const question = `
二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
路径和 是路径中各节点值的总和。
给你一个二叉树的根节点 root ，返回其 最大路径和 。
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
var maxPathSum = function(root) {
    let masSun = -Infinity;

    const getMaxGain = (node) => {
        if(!node) return 0;

         // 递归 计算左右子树的最大贡献值
        let leftGain = Math.max(getMaxGain(node.left), 0),
            rightGain = Math.max(getMaxGain(node.right), 0);
        // 计算 当前路径和（当前节点+左右子树）
        const priceNewPath = node.val + leftGain + rightGain;
        // 更新 最大路径和
        maxPathSum = Math.max(maxPathSum, priceNewPath);
        // 返回 当前节点的最大贡献值
        return node.val + Math.max(leftGain, rightGain);
    };

    getMaxGain(root);

    return maxPathSum;
};