/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头节点
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  // 初始化 快慢指针
  let slow = dummyHead, fast = dummyHead;
  // 快指针 移动 N+1个位置
  for (let index = 0; index <= n; index++) {
    fast = fast.next;
  }
  // 同时移动 快慢指针
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  // 此时 slow指针要删除倒数第N个节点之前的一个节点
  // 修改指针链接 完成删除
  slow.next = slow.next.next;

  return dummyHead.next;
};