const question = `
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
  进阶：你能尝试使用一趟扫描实现吗？
`;
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
	let cur = head;
	let len = 0;

	while (cur) {
		cur = cur.next;
		len += 1;
	}
	let del_node = null;

	if (len === 1 || len - n === 0) {
		head = head.next;
		return head;
	} else {
		let del_index = 0;
		let pre_node = null;
		let cur_node = head;

		while (del_index < len - n) {
			pre_node = cur_node;
			cur_node = cur_node.next;
			del_index += 1;
		}

		del_node = cur_node;
		pre_node.next = cur_node.next;
		del_node.next = null;

		return head;
	}
};
