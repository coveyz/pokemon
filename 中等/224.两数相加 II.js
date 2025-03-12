const question = `
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
你可以假设除了数字 0 之外，这两个数字都不会以零开头。
`


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const reverseList = (head) => {
        let prev = null, curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        };
        return prev
    };

    let list1 = reverseList(l1),
        list2 = reverseList(l2);

    let dummy = new ListNode(0),
        current = dummy,
        carry = 0;
        
    while (list1 || list2) {
        const sum = (list1?.val || 0) + (list2?.val || 0) + carry;
        carry = sum >= 10 ? 1 : 0;

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (list1) {
            list1 = list1.next;
        };
        if (list2) {
            list2 = list2.next;
        }
    };

    if (carry) {
        current.next = new ListNode(carry);
    }

    return reverseList(dummy.next);
};