const question = `
给定二叉树的根节点 root ，返回所有左叶子之和。
`

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
var sumOfLeftLeaves = function (root) {
	if (!root) return 0;

	let queue = [[root, 'undefined']],
		result = 0;

	while (queue.length) {
		const [node, type] = queue.shift();

		if (type === 'left' && !node.left && !node.right) {
			// console.log('type=>',type,'node=>',node.val)
			result += node.val;
		}

		node.left && queue.push([node.left, 'left']);
		node.right && queue.push([node.right, 'right']);
	}

	return result;
};
