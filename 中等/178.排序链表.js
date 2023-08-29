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
  // 如果当前链表 空｜只有一个节点 直接返回 
	if (!head || head.next === null) return head;
  // 快慢指针 找到中间节点
	let pre = null,
		slow = head,
		fast = head;
	while (fast !== null && fast.next !== null) {
		pre = slow;
		slow = slow.next;
		fast = fast.next.next;
	}
  // 切断链表
	pre.next = null;
  // 递归两个子链表
	const left = sortList(head),
		right = sortList(slow);
  // 合并两个有序子链表
	return merge(left, right);
};
