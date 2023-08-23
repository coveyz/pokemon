/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  const merge = (l1, l2) => {
    let dummy = new ListNode(), current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    if (l1) {
      current.next = l1;
    } else {
      current.next = l2;
    }
    
    return dummy.next;
  }
  
  if (!head || head.next === null) return head;

  let pre = null, slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    pre = slow;
    slow = slow.next
    fast = fast.next.next;
  }

  pre.next = null;

  const left = sortList(head), right = sortList(slow);

  return merge(left,right);
};
