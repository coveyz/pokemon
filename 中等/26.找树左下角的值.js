const question = `给定一个二叉树，在树的最后一行找到最左边的值`

var findBottomLeftValue = function (root) {
	if (!root) return 0;
	const queue = [];
	let res;
	queue.push(root);
	while (queue.length) {
		let node = queue.shift();
		res = node.val;
		node.right && queue.push(node.right);
		node.left && queue.push(node.left);
	}

	return res;
};
