const question = `
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
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
var sortList = function (head) {
	const arr = [];

	while (head) {
		arr.push(head.val);
		head = head.next;
	}

	arr.sort((a, b) => a - b);

	let listHead = null,
		listTail = null;

	for (const item of arr) {
		let node = new ListNode(item);
		if (listHead === null) {
			listHead = node;
			listTail = node;
		} else {
			listTail.next = node;
			listTail = listTail.next;
		}
	}

	return listHead;
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
 * @return {ListNode}
 */
var sortList = function (head) {
	const merge = (l1, l2) => {
		let dummy = new ListNode(),
			current = dummy;

		while (l1 && l2) {
			if (l1.val < l2.val) {
				current.next = l1;
				l1 = l1.next;
			} else {
				current.next = l2;
				l2 = l2.next;
			}
			current = current.next;
		}

		if (l1) {
			current.next = l1;
		} else {
			current.next = l2;
		}

		return dummy.next;
	};

	if (!head || head.next === null) return head;

	let pre = null,
		slow = head,
		fast = head;

	while (fast !== null && fast.next !== null) {
		pre = slow;
		slow = slow.next;
		fast = fast.next.next;
	}

	pre.next = null;

	const left = sortList(head),
		right = sortList(slow);

	return merge(left, right);
};
