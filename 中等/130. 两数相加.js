const question = `
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头
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
var addTwoNumbers = function (l1, l2) {
	let head = null,
		tail = null,
		carry = 0;

	while (l1 || l2) {
		const item1 = l1 ? l1.val : 0,
			item2 = l2 ? l2.val : 0,
			sum = item1 + item2 + carry;

		if (!head) {
			head = 	tail = new ListNode(sum % 10);
		} else {
			tail.next = new ListNode(sum % 10);
			tail = tail.next;
		}

		carry = Math.floor(sum / 10);

		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
	}

	if (carry > 0) {
		tail.next = new ListNode(carry);
	}

	return head;
};




/**
 ** 递归
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
var addTwoNumbers = function (l1, l2) {
	const magic = (node1, node2, carry) => {
		if (!node1 && !node2 && carry === 0) return null;

    const value1 = node1 ? node1.val : 0,
      value2 = node2 ? node2.val : 0,
      sum = value1 + value2 + carry;
    const newNode = new ListNode(sum % 10);
    const nextCarry = Math.floor(sum  / 10);

    const nextNode1 = node1 ? node1.next : null;
    const nextNode2 = node2 ? node2.next : null;

    newNode.next = magic(nextNode1,nextNode2, nextCarry);

    return newNode;
	};

	return magic(l1, l2, 0);
};
