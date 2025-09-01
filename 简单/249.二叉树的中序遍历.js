const question = `
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
`;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, arr = []) {
	if (root === null) return arr;
	// console.log(root.val)
	inorderTraversal(root.left, arr);
	arr.push(root.val);
	inorderTraversal(root.right, arr);

	return arr;
};



/**
 * 迭代
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const stack = [],
        result =[];
    let current = root;

    while(current || stack.length) {
        while(current) {
            stack.push(current);
            current = current.left;
        };
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
};