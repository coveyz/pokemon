const question = `
输入两个链表，找出它们的第一个公共节点。
`;

/*
🎯 LeetCode 160/剑指Offer 52. 相交链表/两个链表的第一个公共节点

📝 === 问题理解 ===
找到两个单链表开始相交的节点，注意是节点引用相等，不是值相等！

💡 === 核心思想：路径补偿 ===
🔑 让两个指针走相同的总路径长度，如果有交点必定相遇！

🚀 === 最优解法：双指针交换 ===
- 指针A：走完链表A → 转到链表B头部继续走
- 指针B：走完链表B → 转到链表A头部继续走  
- 总路径：都是 lenA + lenB
- 🎯 如果有交点：必在交点相遇
- 🎯 如果无交点：最终都指向null相遇

📊 === 图解示例 ===
链表A：1 → 2 → 3 ↘
                    8 → 9 → null
链表B：4 → 5 ↗

🔍 指针移动轨迹：
指针A：1→2→3→8→9→null→4→5→8✅
指针B：4→5→8→9→null→1→2→3→8✅
都在节点8相遇！

⚠️ === 重点注意事项 ===
1. 🚨 比较的是节点引用，不是节点值！
2. 🚨 必须用while循环，不能只移动一次
3. 🚨 边界条件：任一链表为空直接返回null
4. 🚨 切换时机：当前指针为null时才切换到另一链表头部

🎭 === 记忆口诀 ===
💫 "你走我的路，我走你的路，有缘终相遇"
💫 "路径补偿法，总长度相等，交点必相遇"
💫 "A走B路，B走A路，相交点上来相聚"

🔄 === 算法步骤 ===
1. 🏃‍♂️ 两指针同时出发
2. 🔄 到达末尾null时切换到另一链表头部  
3. ♾️ 持续移动直到相遇
4. ✅ 返回相遇点（交点或null）

📈 === 复杂度分析 ===
⏱️ 时间复杂度：O(m + n) - 最多遍历两个链表各一次
💾 空间复杂度：O(1) - 只用两个指针变量

🎨 === 其他解法对比 ===
| 方法 | 时间 | 空间 | 特点 |
|------|------|------|------|
| 🏆双指针交换 | O(m+n) | O(1) | 最优雅 |
| 📦哈希表 | O(m+n) | O(m) | 易理解 |
| 📏长度差 | O(m+n) | O(1) | 思路直观 |
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	const visited = new Set();
	let tmp = headA;

	while (tmp) {
		visited.add(tmp);
		tmp = tmp.next;
	}

	tmp = headB;

	while (tmp) {
		if (visited.has(tmp)) return tmp;
		tmp = tmp.next;
	}

	return null;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 双指针
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	let p = headA, q= headB;
	
	while (p !== q) {
		p = p === null ? headB : p.next;
		q = q === null ? headA : q.next;
	}
	return p
};