const question = `
检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。
如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。
注意：此题相对书上原题略有改动。
`;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2) {
	const queue = [];
	const contain = [];
	queue.push(t1);

	while (queue.length) {
		let node = queue.shift();
		contain.push(node.val);
		node.right && queue.push(node.right);
		node.left && queue.push(node.left);
	}

	const box = [];
	box.push(t2);

	while (box.length) {
		let node = box.shift();
		if (!contain.includes(node.val)) return false;
		node.right && box.push(node.right);
		node.left && box.push(node.left);
	}
	return true;
};
