const question = `
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 迭代 翻转/双指针 比对
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	const queue = [];

	while (head) {
		queue.push(head.val);
		head = head.next;
	}

	// const tmpQueue = queue.join(''),
	// 	targetQueue = queue.reverse().join('');
	// return tmpQueue === targetQueue;

	for (let i = 0, j = queue.length - 1; i < j; ++i, --j) {
		if (queue[i] !== queue[j]) {
			return false;
		}
	}

	return true;
};
