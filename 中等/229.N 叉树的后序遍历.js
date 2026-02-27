/*
 * @Author: coveyz zhangkairong123@qq.com
 * @Date: 2025-10-11 16:08:44
 * @LastEditors: coveyz zhangkairong123@qq.com
 * @LastEditTime: 2026-02-27 11:21:59
 * @FilePath: /LeetCode/中等/229.N 叉树的后序遍历.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const question = `
给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。
n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
`;

/*
🌳 N叉树后序遍历 - 核心要点

🎯 思路：逆向思维法
1. 按 根→右→左 顺序收集到数组
2. 最后反转数组 = 后序遍历

🔑 关键点：
- while(stack.length) ✅ 不是 while(stack) 
- 正序入栈 children (与前序相反)
- result.reverse() 得到最终结果

💡 记忆：先收集再反转，子节点先于根节点
*/

/**



/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];

    const stack = [root], 
        result = [];

    while(stack.length) {
        const node = stack.pop();
        result.push(node.val);
       
       for (let i = 0; i < node.children.length; i++) {
        stack.push(node.children[i]);
       }
    }

    return result.reverse()
};




/**
 ** 递归
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {


    /*
    🌳 N叉树后序遍历 - 核心要点

    🎯 思路：递归
    1. 先遍历所有的孩子
    2. 再加入自己的值
    3. 空节点直接返回空数组
    */


    if(!root) return [];

    const result = [];

    for (let child of root.children) {
        result.push(...postorder(child));
    };

    result.push(root.val);

    return result;
};