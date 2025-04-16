| 周次      | 主题                     | 子模块                            | 题量（每日） |
| --------- | ------------------------ | --------------------------------- | ------------ |
| 第1-2周   | 数组 & 双指针            | 滑动窗口、快慢指针、二分查找      | 2-3          |
| 第3-4周   | 栈 & 队列 & 哈希         | 单调栈、LRU、栈模拟、哈希表       | 2-3          |
| 第5-6周   | 链表 & 字符串            | K个一组反转链表、模拟、字符串匹配 | 2-3          |
| 第7-8周   | 树 & DFS/BFS             | 二叉树、递归、回溯、层序遍历      | 2-3          |
| 第9-10周  | 贪心 & 动态规划          | 零钱兑换、股票、背包、子序列      | 2-3          |
| 第11-12周 | 图论 & 并查集 & 高级算法 | 拓扑排序、最短路径、并查集        | 1-2          |


## 1. 题目链接
- [删除有序数组中的重复项](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## 1.1 错误思路/原因
- **错误描述**：第一次做这道题时，我误以为要删除重复元素，但实际上是要将重复的元素移到数组后面，并保持前面的元素顺序不变。在实现时，我没有注意到正确地更新数组中的索引，导致重复元素没有被正确处理。
- **常见误区**：没有注意如何有效地更新指针，尤其是当元素不等时，应该更新主指针并将新元素放入正确位置。

## 1.2 正确解法
### 解法 1：
- **思路**：使用双指针技术，遍历数组。一个指针 `i` 用来记录新数组的最后一个不重复元素的位置，另一个指针 `j` 用来遍历整个数组。遇到不相同的元素时，将其放置在 `i` 后面。
- **时间复杂度**：O(n)，其中 n 是数组的长度。
- **空间复杂度**：O(1)，只用常数空间。

```js
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
```

---

## 2. 题目链接
- [不同的平均值数目](https://leetcode.com/problems/number-of-distinct-averages/description/?envType=problem-list-v2&envId=two-pointers)

## 2.1 正确解法
- **思路**：
  1. 排序：首先可以对数组进行排序，这样可以快速找到最小值和最大值。
  2. 找到最小值和最大值：从排序后的数组两端找到最小值和最大值。
  3. 计算平均值：每次删除最小值和最大值后，计算它们的平均值，并将其加入一个集合中。集合自动去重，因此最终集合的大小即为不同平均值的数量。
  4. 重复此过程：直到数组为空。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b) => a - b);

    const acc = new Set();
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const average = (nums[left] + nums[right]) / 2;
        acc.add(average);
        left++;
        right--;
    };

    return acc.size;
};
```