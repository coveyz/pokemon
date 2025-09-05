const question = `
给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。
n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
`;

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	const arr = [];

	const dfs = (root, res) => {
		if (!root) return;
		res.push(root.val);
		for (const key of root.children) {
			dfs(key, res);
		}
	};

	dfs(root, arr);

	return arr;
};
