const question = `
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
一般来说，删除节点可分为两个步骤：
首先找到需要删除的节点；
如果找到了，删除它。
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	if (root === null) return root;

	if (root.val === key) {
		if (!root.left) {
			return root.right;
		} else if (!root.right) {
			return root.left;
		} else {
			let cur = root.right;
			while (cur.left) {
				cur = cur.left;
			}
			cur.left = root.left;
			root = root.right;
			delete root;
			return root;
		}
	}

	if (root.val > key) {
		root.left = deleteNode(root.left, key);
	}
	if (root.val < key) {
		root.right = deleteNode(root.right, key);
	}

	return root;
};
