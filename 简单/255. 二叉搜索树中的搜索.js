const question = `
给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
	if (!root) return root;

	if (root.val === val) {
		return root;
	}

	const leftChild = searchBST(root.left, val);

	if (leftChild) {
		return leftChild;
	}

	const rightChild = searchBST(root.right, val);

	if (rightChild) {
		return rightChild;
	}

	if (!leftChild && !rightChild) {
		return null;
	}
};
