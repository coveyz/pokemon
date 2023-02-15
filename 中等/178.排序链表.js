const question = `
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
`

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

  arr.sort((a,b) => a - b);

	let listHead = null,listTail = null

  for (const item of arr) {
    let node = new ListNode(item);
    if (listHead === null) {
      listHead = node;
      listTail = node
    } else {
      listTail.next = node;
      listTail = listTail.next
    }
  }

	return listHead;
};
