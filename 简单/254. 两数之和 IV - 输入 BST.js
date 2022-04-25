const question = `
给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
`;

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
	const set = new Set();

	const helper = (root, k) => {
		if (!root) return false;
		if (set.has(k - root.val)) return true;
		set.add(root.val);

		return helper(root.left, k) || helper(root.right, k);
	};

	return helper(root, k);
};
