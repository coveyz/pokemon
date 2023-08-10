const question = `
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
有效 二叉搜索树定义如下：
节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
	const helper = (root, lower, upper) => {
		if (!root) return true;
		if (root.val <= lower || root.val >= upper) return false;

		return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
	};

	return helper(root, -Infinity, Infinity);
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
	if (!root) return true;

  // 模拟中序遍历
	const stack = [];
	let node = root, pre = null;

	while(stack.length || node) {
    //将当前节点的 左节点都塞进去
		while(node) {
			stack.push(node);
			node = node.left;
		}
    //弹出最后一个节点  
		node = stack.pop();
    // 检查是否递增 不是就gg
		if (pre !== null && node.val <= pre.val) return false;
    
		pre = node; //更新 节点
		node = node.right; // 访问 右节点
	}

	return true;
};