const question = `
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
`

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
	// 1. 分治法 BST特性 空数组返回 真
	// 2. 每次以最后一个元素为根， 将当前数组切割成 left, right
	// 3. 除了最后元素 root 外，
	//    leftArr -> 剩下元素按照 < root前，一直小于 root
	//    rightArr -> 当遇到 > root 后边都要比 root 大
	// 4. 按照规则 能一直到最后一个 符合条件
	const help = (postorder, i, j) => {
		// 只有一个的元素 不用分了 i === j 表示只有一个, > j 当前节点不存在 eg 没有右 只有左
		if (i >= j) return true;
		//
		let start = i;
		// left ->
		while (postorder[start] < postorder[j]) {
			start++;
		}
		// postorder[start] > postorder[j]
		let splitor = start; // 中间分割点

		// 之后每个元素 都 > postorder[j]
		while (postorder[start] > postorder[j]) {
			start++;
		}

		if (start < j) return false;

		let isLeftOK = help(postorder, i, splitor - 1),
			isRightOk = help(postorder, splitor, j - 1);

		return isLeftOK && isRightOk;
	};

	if (!postorder || !postorder.length) return true;

	return help(postorder, 0, postorder.length - 1);
};

console.log(verifyPostorder([1, 6, 3, 2, 5]));
console.log(verifyPostorder([1, 3, 2, 6, 5]));
