const question = `
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
	let queue = [],
		tmp = [];

	while (head) {
		if (tmp.length < k) {
			tmp.push(head.val);
		} else {
			queue = queue.concat(tmp.reverse());
			// tmp = [];
			// tmp.push(head.val);
			tmp = [head.val];
		}
		head = head.next;
	}

	if (tmp.length) {
		const cur_tmp = queue.length === 0 || tmp.length === k ? tmp.reverse() : tmp;
		// console.log('queue-length=>',queue.length, cur_tmp);
		queue = queue.concat(cur_tmp);
	}

	// console.log('queue=>',queue);

	let listHead = null,
		listTail = null;

	for (const item of queue) {
		let node = new ListNode(item);

		if (listHead === null) {
			listHead = node;
			listTail = node;
		} else {
			listTail.next = node;
			listTail = node;
		}
	}

	return listHead;
};
