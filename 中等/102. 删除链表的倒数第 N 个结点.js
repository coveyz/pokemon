const question = `
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
  进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // let cur = head;
  // let len = 0;

  // while (cur) {
  // 	cur = cur.next;
  // 	len += 1;
  // }
  // let del_node = null;

  // if (len === 1 || len - n === 0) {
  // 	head = head.next;
  // 	return head;
  // } else {
  // 	let del_index = 0;
  // 	let pre_node = null;
  // 	let cur_node = head;

  // 	while (del_index < len - n) {
  // 		pre_node = cur_node;
  // 		cur_node = cur_node.next;
  // 		del_index += 1;
  // 	}

  // 	del_node = cur_node;
  // 	pre_node.next = cur_node.next;
  // 	del_node.next = null;

  // 	return head;
  // }
  //* 快慢指针
  //* 快的先走 等到了 最后几个 慢的再走
  let slow = (fast = head),
    count = 1;

  while (fast && fast.next) {
    fast = fast.next;
    if (count > n) {
      slow = slow.next;
    }
    count += 1;
  }

  if (count === 1 || count - n === 0) {
    return head.next;
  }

  slow.next = slow.next.next;

  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 ** 双指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head),
    first = head,
    second = dummy;

  for (let index = 0; index < n; index++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头节点
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  // 初始化 快慢指针
  let slow = dummyHead, fast = dummyHead;
  // 快指针 移动 N+1个位置
  for (let index = 0; index <= n; index++) {
    fast = fast.next;
  }
  // 同时移动 快慢指针
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  // 此时 slow指针要删除倒数第N个节点之前的一个节点
  // 修改指针链接 完成删除
  slow.next = slow.next.next;

  return dummyHead.next;
};