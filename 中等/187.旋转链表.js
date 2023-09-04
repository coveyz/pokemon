const question = `
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
`

/**
 ** 思路
 * 1. 首先，计算链表的长度，以获取链表的总节点数 n。
 * 2. 接下来，通过取余运算（k = k % n），将 k 的值限制在链表长度范围内。因为如果 k 大于链表长度，等价于旋转了一圈以上，最终的结果和旋转一圈的效果相同。
 * 3. 然后，找到倒数第 k+1 个节点（即新链表的尾部），以及倒数第 k+2 个节点（新链表的头部）。
 * 4.将倒数第 k+1 个节点的 next 指针置为 null，将倒数第 k+2 个节点作为新链表的头节点。
 * 5.最后，将原链表的尾部连接到原链表的头部，形成闭环，同时返回新链表的头节点，即为旋转后的链表。
    这样，我们就能够完成链表的旋转操作。需要注意的是，为了更高效地找到倒数第 k+1 和 k+2 个节点，
    可以使用快慢指针的方法，其中快指针先向前移动 k+1 步，然后快慢指针一同向前移动，直到快指针到达链表末尾，这样就能够精确找到目标节点。
 */

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