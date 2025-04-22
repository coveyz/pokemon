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
--- 

## 3. 题目链接
- [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/description/?envType=problem-list-v2&envId=array)

## 3.1 正确解法
- **思路**：
  1. 初始化两个指针 left 和 right，分别指向数组的开始和结束。
  2. 计算中间位置 mid。
  3. 如果 nums[mid] === target，返回 mid。
  4. 如果 nums[mid] < target，说明目标值在右侧，更新 left 为 mid + 1。
  5. 如果 nums[mid] > target，说明目标值在左侧，更新 right 为 mid - 1。
  6. 如果遍历完数组，说明目标值不存在，可以返回目标值应该插入的位置。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while(left <= right) {
        const middle = Math.floor((left + right) / 2), middleItem = nums[middle];
        if (middleItem === target) {
            return middle;
        }
        else if (middleItem < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    };

    return left;
};
```

---


## 4. 题目链接
- [28. 找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=problem-list-v2&envId=two-pointers)

## 4.1 正确解法
- **思路**：
  1. 初始化两个指针 i 遍历haystack, j 遍历needle
  2. 遍历haystack
  3. 不匹配， 回退i， 并且 needle重新找 j = 0
  4. 没找到直接 返回 -1

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle || !needle.length) return 0;

    let i = 0, j = 0;

    while(i < haystack.length) {
        if (haystack[i] === needle[j]) {
            j++;
            if (j === needle.length) {
                return i - j + 1;
            }
        } else {
            // while (j > 0) {
            //     i--;
            //     j--;
            // }
             i = i - j; // 回退i到失配字符的下一个位置
            j = 0; // 重置j，重新从头开始匹配
        }
        i++;
    }

    return -1;
};
```

---

## 5. 题目链接
- [541. 反转字符串 II](https://leetcode.cn/problems/reverse-string-ii/description/?envType=problem-list-v2&envId=two-pointers)

## 4.1 正确解法
- **思路**：
  1. 给定字符串 s 和整数 k，每次从前往后每 2k 个字符为一组：
     1. 如果剩下的字符少于 k 个，反转所有剩下的字符。  
     2. 如果剩下的字符不少于 k 但小于 2k，反转前 k 个，剩下的保持不变。
     3. 如果剩下的字符大于等于 2k，只反转前 k 个，后 k 个保持不变。

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr = s.split('');

    for (let i = 0; i < arr.length; i+= 2*k) {
        let left = i, 
            right = Math.min(i + k - 1, arr.length - 1);

        while(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        };
    }
    
    return arr.join('');
};
```

----