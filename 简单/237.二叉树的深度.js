const question = `
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
例如：
给定二叉树 [3,9,20,null,null,15,7]，
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
 * @return {number}
 */
//* 广度优先
var maxDepth = function (root) {
	if (!root) return 0;
	let queue = [root],
		ans = 0;
	while (queue.length) {
		let size = queue.length;
		for (let index = 0; index < size; index++) {
			const node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		ans += 1;
	}

	return ans;
};

//* 递归
var maxDep2 = (root) => {
	if (!root) return 0;
	return Math.max(maxDep2(root.left), maxDep2(root.right)) + 1;
};
