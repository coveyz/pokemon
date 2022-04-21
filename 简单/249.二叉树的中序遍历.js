const question = `
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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
 * @return {number[]}
 */
var inorderTraversal = function (root, arr = []) {
	if (root === null) return arr;
	// console.log(root.val)
	inorderTraversal(root.left, arr);
	arr.push(root.val);
	inorderTraversal(root.right, arr);

	return arr;
};
