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
	const queue = [root],
		res = [];

	while (queue.length) {
		const item = queue.shift();
		res.push(item);
		item.left && queue.push(item.left);
		item.right && queue.push(item.right);
	}

	return res.sort((a, b) => a - b)[k - 1];
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
