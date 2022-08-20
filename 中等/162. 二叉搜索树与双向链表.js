/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
	/**
	 ** 中序遍历
	 */

	if (!root) return root;

	let prev = null,
		head = null;

	const dfsHelper = (root) => {
		if (!root) return root;
		dfsHelper(root.left);
		if (!head) {
			head = new Node(root.val);
			prev = head;
		} else {
			let new_node = new Node(root.val);
			prev.right = new_node;
			new_node.left = prev;
			prev = new_node;
		}
    dfsHelper(root.right)
	};
	dfsHelper(root);
	head.left = prev;
	prev.right = head;

	return head;
};
