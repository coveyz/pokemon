const question = `
给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const queue = [[root, 0]],
        result = [];

    while(queue.length) {
        const [node, index] = queue.shift();

        if (!result[index]) {
            result[index] = [];
        }

        if (index % 2 === 0) {
            queue[index].push(node.val);
        } else {
            queue[index].unshift(node.val);
        }

        node.left && queue.push([node.left, index + 1]);
        node.right && queue.push([node.right, index + 1]);
    }

    return result;
};