/*
 * @Author: coveyz zhangkairong123@qq.com
 * @Date: 2025-09-05 16:13:20
 * @LastEditors: coveyz zhangkairong123@qq.com
 * @LastEditTime: 2026-03-18 10:49:33
 * @FilePath: /LeetCode/简单/318.二叉树的所有路径.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const question = `
给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

叶子节点 是指没有子节点的节点。

 
示例 1：

输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
示例 2：

输入：root = [1]
输出：["1"]
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
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];

    const dfs = (node, path) => {
        if (!node) return;
        path += node.val;
        if(!node.left && !node.right) {
            res.push(path);
            return;
        }
        if (node.left) dfs(node.left, path + '->');
        if (node.right) dfs(node.right, path + '->');
    };
    dfs(root, '');

    return res;
};


/**
 ** DFS + 回溯（最优雅）
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];

    const path = [], 
        result = [];

    const dfs = (node) => {
        if (!node) return;

        path.push(node.val);

        if (!node.left && !node.right) {
            result.push(path.join('->'));
        } else {
            dfs(node.left);
            dfs(node.right);
        };

        path.pop();
    };
    dfs(root);

    return result;
};