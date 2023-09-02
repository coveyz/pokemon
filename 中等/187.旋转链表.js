const question = `
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
`

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  //1. 计算链表长度
  let len = 1, current = head;
  while (current.next) {
    current = current.next;
    len++;
  }

  //2. 对K取余数
  k = k % len;
  if (k === 0) return head;

  //3. 第 K + 1 节点的next为null 将K + 2个节点作为新链表的头节点
  //3.1 使用快慢指针找到倒数 K+1 和 K+2
  let slow = head, fast = head;
  for (let index = 0; index < k; index++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // 4. 切断
  const newHead = slow.next;
  slow.next = null;
  current.next = head;

  return newHead;
};