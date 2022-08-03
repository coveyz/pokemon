const question = `
输入两个链表，找出它们的第一个公共节点。
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	const visited = new Set();
	let tmp = headA;

	while (tmp) {
		visited.add(tmp);
		tmp = tmp.next;
	}

	tmp = headB;

	while (tmp) {
		if (visited.has(tmp)) return tmp;
		tmp = tmp.next;
	}

	return null;
};
