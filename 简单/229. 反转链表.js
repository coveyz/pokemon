const question = `
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 ** 迭代 反转
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) return head;

	let pre_node = null;
	let cur_node = head;

	while (cur_node) {
		let next_node = cur_node.next;
		cur_node.next = pre_node;
		pre_node = cur_node;
		cur_node = next_node;
	}

	return pre_node;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 递归 反转
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) return null;
	if (head.next === null) return head;

	let new_head = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return new_head;
};
