const question = `
定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。
`;

//? 递归思路
//? 1. 如果节点为空，返回0
//? 2. 如果左右子树都为空，返回1
//? 3. 如果节点只有左子树，返回左子树的最小深度+1
//? 4. 如果节点只有右子树，返回右子树的最小深度+1
//? 5. 如果节点有左右子树，返回左右子树的最小深度的较小值+1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 ** DFS 深度优先
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


//? BFS 广度优先思路
//? 1. 如果节点为空，返回0
//? 2. 初始化队列，加入根节点，深度为1
//? 3. 当队列不为空时，循环以下操作
//?    1. 获取当前队列长度
//?    2. 遍历当前层的所有节点
//?       1. 如果节点没有左右子树，返回当前深度
//?       2. 如果节点有左子树，加入队列
//?       3. 如果节点有右子树，加入队列
//?    3. 深度加1   

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 ** BFS 广度优先
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;

    const queue = [root];
    let depth = 1;

    while(queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) return depth;
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        };

        depth++;
    }

    return depth;
};