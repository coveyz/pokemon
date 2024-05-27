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
    const queue = [];

    while (head) {
        queue.push(head.val);
        head = head.next;
    }

    let left = 0, right = queue.length - 1;

    while (left < right) {
        if (queue[left] !== queue[right]) return false;
        
        left++;
        right--;
    }

    return true
};


