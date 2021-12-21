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
	let slow = (fast = head);
	let count = 1;

	while (fast && fast.next) {
		fast = fast.next;

		if (count > n) {
			slow = slow.next;
		}
		count++;
	}

	slow.next = slow.next.next;

	return head;
};
