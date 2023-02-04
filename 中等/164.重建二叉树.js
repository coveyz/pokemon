const question = `
输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
`


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	if (!preorder.length || !inorder.length) return null;

	const rootValue = preorder[0];
	let rootValueIndex = inorder.indexOf(rootValue);

	const root = new TreeNode(rootValue);

	root.left = buildTree(preorder.slice(1, rootValueIndex + 1), inorder.slice(0, rootValueIndex));
	root.right = buildTree(preorder.slice(rootValueIndex + 1), inorder.slice(rootValueIndex + 1));

	return root;
};
