const question = `
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	// 何时停止
	if (!root) return null;
	if (root === p || root === q) return root;
	// 所有可能的子集
	const leftRes = lowestCommonAncestor(root.left, p, q),
		rightRes = lowestCommonAncestor(root.right, p, q);
	// 都不为空 每个都找到了 返回根节点
	if (leftRes !== null && rightRes !== null) {
		return root;
	}
	// 判断结果怎么用
	return leftRes !== null ? leftRes : rightRes;
};