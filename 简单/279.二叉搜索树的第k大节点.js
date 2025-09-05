const question = `
给定一棵二叉搜索树，请找出其中第 k 大的节点的值。
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	if (!root) return root;
	const queue = [root];
	const result = [];

	while (queue.length) {
		const item = queue.shift();
		result.push(item.val);
		// console.log('result=>',result)
		item.left && queue.push(item.left);
		item.right && queue.push(item.right);
	}
	// return result
	return result.sort((a, b) => b - a)[k - 1];
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 ** 中序遍历
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	const box = [];

	const inOrderTraverse = (node) => {
		if (node !== null) {
			inOrderTraverse(node.left);
			box.push(node.val);
			inOrderTraverse(node.right);
		}
	};

	inOrderTraverse(root);
	box.reverse();
	return box[--k];
};
