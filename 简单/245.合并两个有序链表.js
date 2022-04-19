const question = `
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (l1 === null) return l2;
	else if (l2 === null) return l1;

	let merge_head = null,
		merge_tail = null;
	let cur_1 = l1,
		cur_2 = l2;

	while (cur_1 && cur_2) {
		let min_data;

		if (cur_1.val < cur_2.val) {
			min_data = cur_1.val;
			cur_1 = cur_1.next;
		} else {
			min_data = cur_2.val;
			cur_2 = cur_2.next;
		}

		if (merge_head === null) {
			merge_head = new ListNode(min_data);
			merge_tail = merge_head;
		} else {
			const new_node = new ListNode(min_data);
			merge_tail.next = new_node;
			merge_tail = new_node;
		}
	}

	let rest_link = null;

	if (cur_1) {
		rest_link = cur_1;
	}

	if (cur_2) {
		rest_link = cur_2;
	}

	while (rest_link) {
		const new_node = new ListNode(rest_link.val);
		merge_tail.next = new_node;
		merge_tail = new_node;
		rest_link = rest_link.next;
	}

	return merge_head;
};
