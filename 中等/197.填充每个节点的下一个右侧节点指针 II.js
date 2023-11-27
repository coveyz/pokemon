const question = `
给定一个二叉树：
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。
初始状态下，所有 next 指针都被设置为 NULL 。
`

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root;

    let curr = root;

    while (curr) {
        let dummy = new Node(),  //虚拟节点 表示已经链接好下一层的头节点
            tail = dummy; // 用于连接下一层的尾节点
        // 遍历当前层
        while (curr) {
            if (curr.left) {
                tail.next = curr.left;
                tail = tail.next;
            }
            if (curr.right) {
                tail.next = curr.right;
                tail = tail.next;
            }
            curr = curr.next;
        }
        // 移动到下一层的头节点
        curr = dummy.next;
    }

    return root;
};