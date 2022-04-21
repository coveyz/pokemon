const question = `
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 
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
var postorderTraversal = function (root, arr = []) {
	if (root === null) return arr;

	postorderTraversal(root.left, arr);
	postorderTraversal(root.right, arr);
	arr.push(root.val);

	return arr;
};
