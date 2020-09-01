const question = `给你 root1 和 root2 这两棵二叉搜索树。
请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.`;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
	const queue = [];
	const arr = [];
	let res;

	root1 && queue.push(root1);
	root2 && queue.push(root2);

	while (queue.length) {
		let node = queue.shift();
		res = node.val;
		arr.push(res);
		node.right && queue.push(node.right);
		node.left && queue.push(node.left);
	}

	return arr.sort((a, b) => a - b);
};
