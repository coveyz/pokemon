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
	if (p === null && q === null) {
		return true;
	}
	if (p === null || q === null) {
		return false;
	}
	if (p.val !== q.val) {
		return false;
	}

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 迭代
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	const queueP = [p],
		queueQ = [q];

	while (queueP.length && queueQ.length) {
		const itemP = queueP.shift(),
			itemQ = queueQ.shift();

		if (itemP === null && itemQ === null) continue;

		if (itemP === null || itemQ === null || itemP.val !== itemQ.val) return false;

		queueP.push(itemP.left);
		queueP.push(itemP.right);

		queueQ.push(itemQ.left);
		queueQ.push(itemQ.right);
	}

	return queueP.length === queueQ.length;
};
