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
var deleteDuplicates = function (head) {
	if (!head) return head;

	const current_node = new ListNode(0, head);

	while (current_node.next && current_node.next.next) {
		if (current_node.next.val === current_node.next.next.val) {
			const item = current_node.next.val;

			while (current_node.next && current_node.next.val === item) {
				current_node.next = current_node.next.next;
			}
		} else {
			current_node = current_node.next;
		}
	}

	return current_node.next;
};
