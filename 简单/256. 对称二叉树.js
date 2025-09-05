const question = `
给你一个二叉树的根节点 root ， 检查它是否轴对称。
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
	const check = (root1, root2) => {
		if (!root1 && !root2) return true;
		if (!root1 || !root2) return false;

		return root1.val === root2.val && check(root1.left, root2.right) && check(root1.right, root2.left);
	};

	return check(root, root);
};
