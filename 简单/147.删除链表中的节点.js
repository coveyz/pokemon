const question = `
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除后的链表的头节点。
注意：此题对比原题有改动
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
	if (head.val === val) return head.next;
	head.next = deleteNode(head.next, val);
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
