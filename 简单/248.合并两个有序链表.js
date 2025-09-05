const question = `
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 迭代
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (l1 === null) return l2;
	else if (l2 === null) return l1;

	let merge_head = null,
		merge_tail = null;
	let cur_1 = l1,
		cur_2 = l2;

	while (cur_1 && cur_2) {
		let min_data;

		if (cur_1.val < cur_2.val) {
			min_data = cur_1.val;
			cur_1 = cur_1.next;
		} else {
			min_data = cur_2.val;
			cur_2 = cur_2.next;
		}

		if (merge_head === null) {
			merge_head = new ListNode(min_data);
			merge_tail = merge_head;
		} else {
			const new_node = new ListNode(min_data);
			merge_tail.next = new_node;
			merge_tail = new_node;
		}
	}

	let rest_link = null;

	if (cur_1) {
		rest_link = cur_1;
	}

	if (cur_2) {
		rest_link = cur_2;
	}

	while (rest_link) {
		const new_node = new ListNode(rest_link.val);
		merge_tail.next = new_node;
		merge_tail = new_node;
		rest_link = rest_link.next;
	}

	return merge_head;
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 迭代2.0
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	const dummy = new ListNode(-1);
	let current = dummy;


	while(list1 && list2) {
		if (list1.val <= list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {	
			current.next = list2;
			list2 = list2.next;
		}

		current = current.next
	}

	current.next = list1 || list2
	
	return dummy.next
};






/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 递归
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	if (list1 == null) return list2;
	else if (list2 === null) return list1;
	else if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
};
