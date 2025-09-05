const question = `
给你二叉树的根节点 root ，返回它节点值的 前序 遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root, arr = []) {
	if (root === null) return arr;
	// console.log(root.val)
	arr.push(root.val);
	preorderTraversal(root.left, arr);
	preorderTraversal(root.right, arr);

	return arr;
};
