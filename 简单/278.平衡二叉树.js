const question = `
给定一个二叉树，判断它是否是 平衡二叉树  

平衡二叉树: 平衡二叉树 是指该树所有节点的左右子树的高度相差不超过 1。
`
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	const height = (root) => {
		if (root == null) {
			return 0;
		} else {
      return Math.max(height(root.left),height(root.right)) + 1
		}
	};

	if (root === null) {
		return true;
	} else {
		return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
	}
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const checkHeight = (node) => {
        // 1. 递归终止条件：空节点高度为0
        if (!node) return 0;

        // 2. 递归计算左右子树高度
        const leftHeight = checkHeight(node.left);
        const rightHeight = checkHeight(node.right);

        // 3. 关键判断：任一子树不平衡 或 当前节点不平衡
        if (leftHeight === -1 || rightHeight === -1 || 
            Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // 返回-1表示不平衡
        }

        // 4. 返回当前节点的高度
        return Math.max(leftHeight, rightHeight) + 1;
    };

    // 5. 最终判断：-1表示不平衡，其他值表示平衡
    return checkHeight(root) !== -1;
};