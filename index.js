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
var addTwoNumbers = function (l1, l2) {
	const magic = (node1, node2, carry) => {
		if (!node1 && node2 && carry === 0) return null;

    const value1 = node1 ? node1.val : 0,
      value2 = node2 ? node2.val : 0,
      sum = value1 + value2 + carry;
    const newNode = new ListNode(sum % 10);
    const nextCarry = Math.floor(sum  / 10);

    const nextNode1 = node1 ? node1.next : null;
    const nextNode2 = node2 ? node2.next : null;

    newNode.next =  magic(nextNode1,nextNode2, nextCarry);

    return newNode;
	};

	return magic(l1, l2, 0);
};
