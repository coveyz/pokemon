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
