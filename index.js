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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	const sums = [],
		counts = [];

	const dfs = (node, level) => {
		if (!node) return;

		if (!sums[level]) {
			sums[level] = [];
			counts[level] = 0;
		}

		sums[level].push(node.val);
		counts[level]++;

		node.left && dfs(node.left, level + 1);
		node.right && dfs(node.right, level + 1);
	};

	dfs(root, 0);

	return sums.map((item.index) => {
    const tmp = item.reduce((acc,cur) => acc += cur, 0);
    item = tmp / counts[index];
    return item
  })
};
