/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
	//* 常规判断 是否非空
	if (!A || !B) return false;
  //* 判断 A 和 B 是否完全相等, 左边的树 或者 右边的树 是否包含 B
	return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

const isSame = (A, B) => {
  //* B为空 说明B已经到底了 true
	if (!B) return true;
  //* A为空 说明A到底都没找到 false
	if (!A) return false;
  //* 当前值不对 false
	if (A.val !== B.val) return false;
  //* 递归 观察左， 观察右
	return isSame(A.left, B.left) && isSame(A.right, B.right);
};
