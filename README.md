# pokemon



| 周次      | 主题                     | 子模块                            | 题量（每日） |
| --------- | ------------------------ | --------------------------------- | ------------ |
| 第1-2周   | 数组 & 双指针            | 滑动窗口、快慢指针、二分查找      | 2-3          |
| 第3-4周   | 栈 & 队列 & 哈希         | 单调栈、LRU、栈模拟、哈希表       | 2-3          |
| 第5-6周   | 链表 & 字符串            | K个一组反转链表、模拟、字符串匹配 | 2-3          |
| 第7-8周   | 树 & DFS/BFS             | 二叉树、递归、回溯、层序遍历      | 2-3          |
| 第9-10周  | 贪心 & 动态规划          | 零钱兑换、股票、背包、子序列      | 2-3          |
| 第11-12周 | 图论 & 并查集 & 高级算法 | 拓扑排序、最短路径、并查集        | 1-2          |


## 1. 题目链接
- [删除有序数组中的重复项](https://leetcode.com/**problems**/remove-duplicates-from-sorted-array/)

## 1.1 错误思路/**原因**
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

## 5.1 正确解法
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


## 6. 题目链接
- [2511. 最多可以摧毁的敌人城堡数目](https://leetcode.cn/problems/maximum-enemy-forts-that-can-be-captured/description/?envType=problem-list-v2&envId=two-pointers)

## 6.1 正确解法
- **思路**：
  1. 初始化： 遍历找到所有城堡的位置 （值=1）
  2. 扫描一对城堡： 对每一对控制的城堡， 判断这俩城堡之间所有位置，如果是空地的话记录
  3. 滑动窗口： 通过滑动窗口维护，遇到敌人城堡（值=1）+1， 如果遇到空地结束更新最大值，遇到自己城堡停止计算
  4. 返回结果

```js
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    const n = forts.length;
    let maxDestroyed = 0;
        
    const scan = (start, step) => {
        let count = 0
        for (let i = start; i >= 0 && i < n; i += step) {
            if (forts[i] === 0) {
                count++;
            } else if (forts[i] === -1) {
                maxDestroyed = Math.max(maxDestroyed, count);
                break;
            } else {
                break;
            }
        };
    };

    for(let i = 0; i < n; i++ ) {
        if (forts[i] === 1) {
            let count = 0
            //left -> right;
            scan(i + 1, 1)
            // right <-left;
            scan(i - 1, -1)
        };
    }

    return maxDestroyed;
};
```

---


## 7. 题目链接
- [557. 反转字符串中的单词 III](https://leetcode.cn/problems/reverse-words-in-a-string-iii/description/?envType=problem-list-v2&envId=two-pointers)

## 7.1 正确解法
- **思路**：
  1. 初始化： 字符串 -> 数组 （方便原地转换
  2. 定义指针
     1. start 开始
     2. end 便利整个字符串，查找空格和结尾
  3. end 到空格结尾就结束了
  4. 用两个新的left，right 原地反转
  5. 更新 start 为下一个单词的起始点
  6. 遍历结束，返回修改后的字符串

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split('');

    let start = 0;

    for(let end = 0; end <= s.length; end++) {
        if (arr[end] === ' ' || end === s.length) {
            let left = start, right = end - 1;

            while(left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];

                left++;
                right--;
            };

            start = end + 1;
        };
    }

    return arr.join('');
};

```


## 8. 题目链接
- [219. 存在重复元素 II](https://leetcode.cn/problems/contains-duplicate-ii/description/?envType=problem-list-v2&envId=array)

## 8.1 正确解法
- **思路**：
  1. 维护一个大小为 K 的窗口
  2. 每次检查当前元素是否出现在窗口内
  3. 超出窗口大小 删除 窗口中最左元素 i - k

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const acc = new Set();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (acc.has(element)) return true;
        acc.add(element);
        if (acc.size > k) {
            acc.delete(nums[i - k]);
        }
    };

    return false;
};

```

## 9. 题目链接
- [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=array)

## 9.1 正确解法
- **思路**：
  * 从后往前的双指针法
  1. 比较末尾元素：比较 nums1[i] 和 nums2[j]
  2. 选择较大者：将较大的元素放到 nums1[k] 位置
  3. 移动指针：被选中的数组指针前移，k 指针也前移
  4. 处理剩余：如果 nums2 还有剩余，继续复制到 nums1
   
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;    // nums1 最后一个有效元素
    let j = n - 1;    // nums2 最后一个元素
    let k = m + n - 1; // 合并后数组的最后位置

    // 从后往前比较和填充
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // 如果 nums2 还有剩余，复制到 nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    // nums1 的剩余元素已经在正确位置，无需处理
};
```

## 10. 题目链接
- [110. 平衡二叉树](https://leetcode.com/problems/balanced-binary-tree/description/)
## 10.1 正确解法
- **思路**：
  * 自底向上的优化解法
  1. 一次遍历同时计算高度和判断平衡性
  2. 用 -1 作为标记：表示子树不平衡
  3. 提前剪枝：一旦发现不平衡，立即返回 -1


   
```js
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const checkHeight = (node) => {
        // 1. 递归终止条件：空节点高度为0
        if (!node) return 0;

        // 2. 递归计算左右子树高度
        const leftHeight = checkHeight(node.left);
        const rightHeight = checkHeight(node.right);

        // 3. 关键判断：任一子树不平衡 或 当前节点不平衡
        if (leftHeight === -1 || rightHeight === -1 || 
            Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // 返回-1表示不平衡
        }

        // 4. 返回当前节点的高度
        return Math.max(leftHeight, rightHeight) + 1;
    };

    // 5. 最终判断：-1表示不平衡，其他值表示平衡
    return checkHeight(root) !== -1;
};
```