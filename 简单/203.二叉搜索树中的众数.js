/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function (root) {
	const queue = [];
	const frequencyObj = {};
    const arr = []

	queue.push(root);

	while (queue.length) {
		const node = queue.shift();
		const res = node.val;

        !arr.includes(node.val) && arr.unshift(node.val)
        
		frequencyObj[res] = (frequencyObj[res] || 0) + 1;

		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}
    const max = Math.max(...Object.values(frequencyObj))
    
    return arr.filter(item => {
        return frequencyObj[item] === max
    })
};