const question = `
给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || !preorder.length) return null;
    // 前序遍历 第一个元素为根节点
    const rootVal = preorder[0].val;
    const root = new TreeNode(rootVal);

    // 中序遍历中找根节点
    const rootIndex = inorder.indexOf(rootVal);
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

    return root;
};


/**
 * 用哈希表加速
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const inorderMap = new Map();
    inorder.forEach((val, index) => {
        inorderMap.set(val, index);
    });

    let preIndex = 0;

    const build = (left, right) =>{
        if (left > right) return null;

        let rootVal = preorder[preIndex++];
        let root = new TreeNode(rootVal);
        let rootIndex = inorderMap.get(rootVal);

        root.left = build(left, rootIndex - 1);
        root.right = build(rootIndex + 1, right);

        return root;
    };

    return build(0, inorder.length - 1);
};