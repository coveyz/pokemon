const question = `
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
叶子节点 是指没有子节点的节点。
`;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
	if (!root) return false;

	if (root.left === null && root.right === null) {
		return sum - root.val === 0;
	}

	return hasPathSum(root.left, (sum -= root.left)) || hasPathSum(root.right, (sum -= root.right));
};



/**
 ** 广度优先 BFS
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