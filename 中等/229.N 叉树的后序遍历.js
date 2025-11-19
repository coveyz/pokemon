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