const question = `给定一个 N 叉树，找到其最大深度。
最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
例如，给定一个 3叉树 :`;

const maxDepth = (root) => {
	if (!root) return 0;
	let num = 0;
	if (root.children) {
		root['children'].forEach((element) => {
			let max = maxDepth(element);
			console.log(element, max);
			num = Math.max(max, num);
		});
	}
	1;
	return num + 1;
};

const deep = {
	val: 1,
	children: [
		{
			val: 3,
			children: [
				{ val: 5, children: [] },
				{ val: 6, children: [] },
			],
		},
		{ val: 2, children: [] },
		{ val: 4, children: [] },
	],
};

console.log(maxDepth(deep));
