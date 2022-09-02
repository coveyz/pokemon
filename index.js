/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
	if (head.val == val) return head.next;
	let cur_head = head;
	while (cur_head.next) {
		if (cur_head.next.val === val) {
			cur_head = cur_head.next;
		}
		cur_head = cur_head.next;
	}

	return head;
};

//* 迭代
var deleteNode = function (head, val) {
	if (head.val == val) return head.next;
	let cur_head = head;
	while (cur_head.next) {
		if (cur_head.next.val === val) {
			cur_head.next = cur_head.next.next;
			return head;
		}
		cur_head = cur_head.next;
	}

	return head;
};
