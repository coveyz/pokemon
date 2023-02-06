/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [[root,0]],res = [];

  while (queue.length) {
    const [node,level] = queue.shift();

    console.log('node=>',node);

    if (!res[level]) {
      res[level] = []
    }
    res[level].push(node.val);

    console.log('res=>',res);

    if (node.children) {
      for (let index = 0; index < node['children'].length; index++) {
        const element = node['children'][index];
        console.log('node-children-element=>',element);
        queue.push([element,level + 1]);
      }
    }

    console.log('queue=>',queue)
  }

  return res;
};
