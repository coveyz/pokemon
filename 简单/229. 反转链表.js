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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) return;

	let pre_node = null; //* 上一个节点
	let cur_node = head;

	while (cur_node) {
		let next_node = cur_node.next; //* 下一个节点
		cur_node.next = pre_node; //* 需要对当前节点 进行反转
		pre_node = cur_node;
		cur_node = next_node;
	}

	return pre_node;
};
