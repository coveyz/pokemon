const question = `
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
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
 * @return {number}
 */
var minDiffInBST = function (root) {
	//* 1.0
	// let minNumber = Infinity;
	// const queue = [];
	// const arr = [];
	// let res;
	// queue.push(root);
	// while (queue.length) {
	// 	let node = queue.shift();
	// 	res = node.val;
	// 	arr.push(res);
	// 	node.left && queue.push(node.left);
	// 	node.right && queue.push(node.right);
	// }
	// for (let index = 0; index < arr.length; index++) {
	// 	const element = arr[index];
	// 	for (let key = index + 1; key < arr.length; key++) {
	// 		const item = arr[key];
	// 		const result = Math.abs(item - element);

	// 		if (result < minNumber) {
	// 			minNumber = result;
	// 		}
	// 	}
	// }
	// return minNumber;

	//* 2.0
	let min = Infinity;
	let pre = -1;
	dfs(root);
	return min;
	function dfs(node) {
		if (!node) return;
		let { left, right, val } = node;
		dfs(left);
		if (pre !== -1) min = Math.min(val - pre, min);
		pre = val;
		dfs(right);
	}
};
