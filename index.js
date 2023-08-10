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
 * @return {boolean}
 */
var isValidBST = function (root) {
	if (!root) return true;

	const stack = [],
		pre = null,
		node = root;

	while (node || stack.length) {
		while (node) {
			stack.push(node);
			node = node.left;
		}

		node = stack.pop();

		if (pre !== null && node.val <= pre.val) {
			return false;
		}

		pre = node;
		node = node.right;
	}

	return true;
};
