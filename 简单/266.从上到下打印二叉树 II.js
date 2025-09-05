const question = `
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
例如:
给定二叉树: [3,9,20,null,null,15,7],
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	const queue = [[root, 0]];
	container = [];

	while (queue.length) {
		const [node, level] = queue.shift();
		if (!container[level]) {
			container[level] = [];
		}
		container[level].push(node.val);
		node.left && queue.push([node.left, level + 1]);
		node.right && queue.push([node.right, level + 1]);
	}

	return container;
};
