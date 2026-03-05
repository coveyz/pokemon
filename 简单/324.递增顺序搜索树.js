const question = `
给你一棵二叉搜索树的 root ，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，
使树中最左边的节点成为树的根节点，
并且每个节点没有左子节点，只有一个右子节点。
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
 ** 先收集 在重建
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const vals = [];

    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        vals.push(node.val);
        inorder(node.right);
    };
    inorder(root);

    let head = new TreeNode(vals[0]);
    let current = head;

    for (let i = 1; i < vals.length; i++) {
        current.right = new TreeNode(vals[i]);
        current = current.right;
    };

    return head;
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
 ** 中序遍历 + 直接构建
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    // 哨兵节点 避免判断第一个节点的特殊情况
    let dummy = new TreeNode(0); // 💂哨兵节点
    let current = dummy;

    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);

        current.right = new TreeNode(node.val);
        current = current.right;

        inorder(node.right);
    };
    inorder(root);

    return dummy.right; // 返回 真正的头部节点
};