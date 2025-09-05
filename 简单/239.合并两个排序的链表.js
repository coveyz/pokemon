const question = `
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
`;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	if (l1 === null || l2 === null) return l1 === null ? l2 : l1;

	if (l1.val < l2.next) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 ** 迭代
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
	if (!l1) return l2;
	if (!l2) return l1;

	let merge_header = null,
		merge_tail = null,
		cur_l1 = l1,
		cur_l2 = l2;

	while (cur_l1 && cur_l2) {
		let min_data;
		if (cur_l1.val < cur_l2.val) {
			min_data = cur_l1.val;
			cur_l1 = cur_l1.next;
		} else {
			min_data = cur_l2.val;
			cur_l2 = cur_l2.next;
		}
        
		const new_node = new ListNode(min_data);
        
		if (!merge_header) {
			merge_header = new_node;
			merge_tail = new_node;
		} else {
			merge_tail.next = new_node;
			merge_tail = new_node;
		}
	}

	let link_str = null;

	if (cur_l1) {
		link_str = cur_l1;
	}
	if (cur_l2) {
		link_str = cur_l2;
	}

	while (link_str) {
		const new_node = new ListNode(link_str.val);
		merge_tail.next = new_node;
		merge_tail = new_node;
		link_str = link_str.next;
	}

	return merge_header;
};

