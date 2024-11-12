const question = `
给定一个整数数组，它表示BST(即 二叉搜索树 )的 先序遍历 ，构造树并返回其根。
保证 对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。
二叉搜索树 是一棵二叉树，其中每个节点， Node.left 的任何后代的值 严格小于 Node.val , Node.right 的任何后代的值 严格大于 Node.val。
二叉树的 前序遍历 首先显示节点的值，然后遍历Node.left，最后遍历Node.right。
`

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let index = 0;

    const buildTree = (min, max) => {
        if (index === preorder.length || preorder[index] < min || preorder[index] > max) return null;

        const value = preorder[index++], 
            root = new TreeNode(value);

        root.left = buildTree(min, value);
        root.right = buildTree(value, max);

        return root;
    }

    return buildTree(-Infinity, Infinity);
};