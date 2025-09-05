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



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	if (head === null || head.next === null) return true;

	let slow = head, fast = head;

	// 利用快慢指针 找到中间节点
	while (fast !== null && fast.next !== null ) {
		slow = slow.next;
		fast = fast.next.next;
	}

	 // 反转后半部分链表
	let prev = null, current = slow;
	while (current !== null) {
		let nextTmp = current.next;
		current.next = prev;
		prev = current;
		current = nextTmp;
	}

	// 比较前半部分 和 后半部分
	let firstHalf = head, secondHalf = prev;
	while (secondHalf !== null) {
		if (firstHalf.val !== secondHalf.val) return false;
		firstHalf = firstHalf.next;
		secondHalf = secondHalf.next;
	}

	return true;
};