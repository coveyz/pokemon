const question = `
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    const queue = [];

    while (head) {
        queue.push(head.val);
        head = head.next;
    }

    // const tmp = queue.splice(left - 1, right - 1).reverse();
    const tmp = queue.splice(left - 1, right - left + 1).reverse();
    queue.splice(left-1, 0 , ...tmp);
    // console.log('queue=>', queue)

    let top = null, tail = null;

    for (let index = 0; index < queue.length; index++) {
        const element = new ListNode(queue[index]);
        if (!top) {
            top = element;
            tail = element
        } else {
            tail.next = element;
            tail = element;
        }
        
    }

    return top
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let preLeft = dummy;
    // 反转到 left 前一个节点
    for (let index = 0; index < left - 1; index++) {
        preLeft = preLeft.next;
    }

    let current = preLeft.next, prev = null;
    // 反转 left - right 之间的节点
    for (let index = 0; index < right - left + 1; index++) {
        const next =current.next;
        current.next = prev
        prev = current;
        current = next
    }

    preLeft.next.next = current;
    preLeft.next = prev;

    return dummy.next;
};