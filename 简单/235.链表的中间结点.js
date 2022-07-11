const question = `
给定一个头结点为 head 的非空单链表，返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。
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
 * @return {ListNode}
 */
var middleNode = function (head) {
	//* 快慢指针
	let slow = (fast = head);

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 数组迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	const arr = [head];

	while (arr[arr.length - 1].next !== null) {
		arr.push(arr[arr.length - 1].next);
	}
  
	const len = arr.length,
		middle = (0 + len) >> 1;

	return arr[middle];
};
