const question = `
给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）
`;

/**
 * @param {Node} root
 * @return {number[][]}
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) {
		return [];
	}
	const queue = [];
	const arr = [[root.val]];
	queue.push(...root.children);

	const dp = (queue) => {
		const social = queue.map((item) => item.val);
		if (social && social.length) {
			arr.push(social);
		}

		const qq = queue.reduce((acc, cur) => {
			if (cur.children && cur.children.length) {
				acc.push(...cur.children);
			}
			return acc;
		}, []);
		if (qq && qq.length > 0) {
			dp(qq);
		}
	};

	dp(queue);

	return arr;
};


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 ** BFS 
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [[root,0]],res = [];

  while (queue.length) {
    const [node,level] = queue.shift();

    // console.log('node=>',node);

    if (!res[level]) {
      res[level] = []
    }
    res[level].push(node.val);

    // console.log('res=>',res);

    if (node.children) {
      for (let index = 0; index < node['children'].length; index++) {
        const element = node['children'][index];
        // console.log('node-children-element=>',element);
        queue.push([element,level + 1]);
      }
    }

    // console.log('queue=>',queue)
  }

  return res;
};

