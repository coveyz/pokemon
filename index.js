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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
   if (!root) return false;

    const queue = [];
    queue.push({node: root, sum: 0});

    while (queue.length) {
        const { node, sum } = queue.shift();
        
        if (!node.left && !node.right && sum + node.val === targetSum) {
            return true;
        }
        if (node.left) {
            queue.push({node: node.left, sum: sum + node.val})
        }
        
        if (node.right) {
            queue.push({node: node.right, sum: sum + node.val})
        }
    }

    return false;
};