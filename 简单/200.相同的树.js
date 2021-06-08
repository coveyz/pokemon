const question = `
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	if (p === null && q === null) return true;
	if (p === null && q !== null) return false;
	if (p !== null && q === null) return false;

	const queue1 = [];
	const queue2 = [];

	queue1.push(p);
	queue2.push(q);

	while (queue1.length) {
		const res = queue1.shift();
		const res2 = queue2.shift();

		if ((res && !res2) || (!res && res2) || res.val !== res2.val) {
			return false;
		}

		if (res.left === null && res2.left !== null) {
			return false;
		}
		if (res.right === null && res2.right !== null) {
			return false;
		}

		res.left && queue1.push(res.left);
		res.right && queue1.push(res.right);

		res2.left && queue2.push(res2.left);
		res2.right && queue2.push(res2.right);
	}

	return queue1.length === queue2.length;
};
