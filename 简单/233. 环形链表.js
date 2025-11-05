const question = `
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：
你能用 O(1)（即，常量）内存解决此问题吗？
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //* 1.0.0 容器
	// if (!head) return false;
	// const contain = [];
	// while (head.next) {
	// 	if (contain.includes(head.next)) {
	// 		return true;
	// 	} else {
	// 		contain.push(head.next);
	// 	}
	// 	head = head.next;
	// }

	// return false;


  //* 2.0.0 标记
  if (!head) return false

  while(head.next) {
      if (head.tag) {
          return true
      } else {
          head['tag'] = true
      }

      head = head.next
  }

  return false
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 ** 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    
    let slow = head;      // 🐢 慢指针：每次走1步
    let fast = head.next; // 🐰 快指针：每次走2步
    
    while (fast && fast.next) {
        if (slow === fast) {
            return true; // 🎯 快指针追上慢指针，有环！
        }
        slow = slow.next;        // 🐢 慢指针走1步
        fast = fast.next.next;   // 🐰 快指针走2步
    }
    
    return false; // 🏁 快指针到达末尾，无环
};