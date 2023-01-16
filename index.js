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
var sumOfLeftLeaves = function (root) {
	const isLeafNode = (node) => {
		return node.left === null && node.right === null;
	};

	const dfs = (node) => {
		let ans = 0;

		if (node.left !== null) {
			ans += isLeafNode(node.left) ? node.left.val : dfs(node.left);
		}

		if (node.right !== null && !isLeafNode(node.right)) {
			ans += dfs(node.right);
		}

		return ans;
	};

	return root !== null ? dfs(root) : 0;
};
