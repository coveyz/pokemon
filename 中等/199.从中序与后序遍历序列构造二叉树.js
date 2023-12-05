const question = `
给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;

    const rootVal = postorder.pop(), //在后序中找到根节点
        rootIndex = inorder.indexOf(rootVal);  //在中序中找根节点位置
    const root = new TreeNode(rootVal); 

    root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
    root.left = buildTree(inorder.slice(0, rootIndex), postorder);

    return root;
};