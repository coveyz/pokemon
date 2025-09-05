/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let fast = head,
		low = head,
		count = 0;

	while (fast) {
		fast = fast.next;
    
		if (count >= k) {
			low = low.next;
		}
    
		count++;
	}

	return low;
};
