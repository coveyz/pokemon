const question = `给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。`

/**
 * 反正吧 
 * 格式是对的
 * @param {*} tree 
 */
const listOfDepth = (tree) => {
	var arr = [];
	function add(deep, node) {
    if (!node.length) {
      return 
    }
		if (!deep) {
			arr.push([node[deep]]);
			const temp = node.slice(1);
			add(1, temp);
		} else {
      let calculation =  arr[arr.length - 1].length * 2;
      const number = calculation > node.length ? node.length : calculation
			const qq = [];
			for (let index = 0; index < number; index++) {
        const element = node[index];
        if (element) {
          qq.push(element);
        }
			}
			arr.push(qq);
			const newTmpArr = node.splice(number);
			add(deep + 1, newTmpArr);
		}
	}
	add(0, tree);
	return arr;
};

console.log(listOfDepth([1,2,3,4,5,null,7,8,null,555,3,2,3,1,4,2,4,67,8,9,3]));
