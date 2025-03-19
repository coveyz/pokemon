const question = `
给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。
`

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null;

    const queue = [root];

    while(queue.length) {
        const size = queue.length
        for(let index = 0; index < size; index++ ) {
            const node = queue.shift();

            if (index < size - 1) {
                node.next = queue[0];
            }

            if (node.left) {
                queue.push(node.left);
            } 
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return root;
};


/**
 * 递归
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root || !root.left) return root;

    root.left.next = root.right;

    if (root.next) {
        root.right.next = root.next.left;
    };

    connect(root.left);
    connect(root.right);

    return root;
};