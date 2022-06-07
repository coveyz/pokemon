/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];

	const queue = [root],
		result = [];
	let isOrderLeft = true;

	while (queue.length) {
		const levelList = [],
			size = queue.length;
		for (let index = 0; index < size; index++) {
			const node = queue.shift();
			if (isOrderLeft) {
				levelList.push(node.val);
			} else {
				levelList.unshift(node.val);
			}
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}

		result.push(levelList);
		isOrderLeft = !isOrderLeft;
	}

	return result;
};
