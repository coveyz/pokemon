const question = `
给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
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
 * @return {number}
 */
var kthSmallest = function (root, k) {
	const queue = [];
	const arr = [];
	root && queue.push(root);
	let result;
	while (queue.length) {
		let node = queue.shift();
		result = node.val;
		arr.push(result);

		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}

	return arr.sort((a, b) => a - b)[k - 1];
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 🔫 中序遍历
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	const result = [];

	const magic = (node) => {
		if (node) {
			magic(node.left);
			result.push(node.val);
			magic(node.right);
		}
	};
	magic(root);

	return result[k - 1];
};
