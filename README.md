# LeetCode 学习笔记 (pokemon)

> 目标：系统化刷题 + 记录易错点 + 沉淀标准解法与模板。

## 学习规划
| 周次  | 主题               | 子模块                          | 日题量 |
| ----- | ------------------ | ------------------------------- | ------ |
| 1-2   | 数组 & 双指针      | 滑动窗口 / 快慢指针 / 二分      | 2-3    |
| 3-4   | 栈 & 队列 & 哈希   | 单调栈 / 栈模拟 / LRU / 哈希表  | 2-3    |
| 5-6   | 链表 & 字符串      | 反转 / 模拟 / 子串匹配          | 2-3    |
| 7-8   | 树 & DFS/BFS       | 二叉树遍历 / 递归 / 回溯 / 层序 | 2-3    |
| 9-10  | 贪心 & DP          | 硬币 / 股票 / 背包 / 子序列     | 2-3    |
| 11-12 | 图 & 并查集 & 进阶 | 拓扑 / 最短路 / 并查集          | 1-2    |

## 目录
1. 删除有序数组中的重复项 (#26)
2. 不同的平均值数目 (#2465)
3. 搜索插入位置 (#35)
4. 找出字符串中第一个匹配项的下标 (#28)
5. 反转字符串 II (#541)
6. 最多可以摧毁的敌人城堡数目 (#2511)
7. 反转字符串中的单词 III (#557)
8. 存在重复元素 II (#219)
9. 合并两个有序数组 (#88)
10. 平衡二叉树 (#110)
11. 验证回文串 (#125)
12. 回文链表 (#234)
13. 无法吃午餐的学生数量(#1700)

---

### 1. 删除有序数组中的重复项 (#26)
[链接](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- **标签**：数组，双指针
- **错误反思**：最初误解为“删除”，忽略原地覆盖 + 返回长度。
- **思路**：`i` 指向当前去重后最后位置，`j` 扫描；遇新值放到 `++i`。
- **复杂度**：O(n) / O(1)****
```js
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};
```

---
### 2. 不同的平均值数目 (#2465)
[链接](https://leetcode.com/problems/number-of-distinct-averages/)
- **标签**：排序，双指针，集合
- **思路**：排序后两端向内，每次 (min+max)/2 放入 Set。
- **复杂度**：O(n log n) / O(1~n)
```js
var distinctAverages = function(nums) {
  nums.sort((a,b)=>a-b);
  const set = new Set();
  let l = 0, r = nums.length - 1;
  while (l < r) set.add((nums[l++] + nums[r--]) / 2);
  return set.size;
};
```

---
### 3. 搜索插入位置 (#35)
[链接](https://leetcode.cn/problems/search-insert-position/)
- **标签**：二分
- **思路**：标准二分，未命中返回 left。
- **复杂度**：O(log n) / O(1)
```js
var searchInsert = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    if (nums[m] === target) return m;
    nums[m] < target ? l = m + 1 : r = m - 1;
  }
  return l;
};
```

---
### 4. 找出字符串中第一个匹配项的下标 (#28)
[链接](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- **标签**：字符串，双指针（朴素匹配）
- **思路**：双指针；失配时主串回退 `i - j + 1`，模式串清零。可升级 KMP。
- **复杂度**：最坏 O(nm)
```js
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  let i = 0, j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (++j === needle.length) return i - j + 1;
    } else {
      i -= j; j = 0;
    }
    i++;
  }
  return -1;
};
```

---
### 5. 反转字符串 II (#541)
[链接](https://leetcode.cn/problems/reverse-string-ii/)
- **标签**：字符串，模拟
- **思路**：每 2k 段反转前 k。末尾用 Math.min 控制右界。
- **复杂度**：O(n) / O(1)
```js
var reverseStr = function(s, k) {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i += 2*k) {
    let l = i, r = Math.min(i + k - 1, arr.length - 1);
    while (l < r) [arr[l], arr[r]] = [arr[r], arr[l]], l++, r--;
  }
  return arr.join('');
};
```

---
### 6. 最多可以摧毁的敌人城堡数目 (#2511)
[链接](https://leetcode.cn/problems/maximum-enemy-forts-that-can-be-captured/)
- **标签**：数组，扫描
- **思路**：遇到 1 向两边扫描：连续 0 后若遇 -1 统计。
- **复杂度**：O(n * k) 最坏（k 为局部跨度）。可进一步一次线性扫描优化。
```js
var captureForts = function(forts) {
  const n = forts.length; let ans = 0;
  const scan = (i, step) => { let cnt = 0; for (let p = i; p>=0 && p<n; p+=step){
    if (forts[p] === 0) cnt++; else if (forts[p] === -1){ ans = Math.max(ans,cnt); break;} else break; }
  };
  for (let i = 0; i < n; i++) if (forts[i] === 1) { scan(i+1,1); scan(i-1,-1);} 
  return ans;
};
```

---
### 7. 反转字符串中的单词 III (#557)
[链接](https://leetcode.cn/problems/reverse-words-in-a-string-iii/)
- **标签**：字符串，原地反转
- **思路**：双指针定位单词区间反转。
- **复杂度**：O(n) / O(1)
```js
var reverseWords = function(s) {
  const arr = s.split('');
  let start = 0;
  for (let end = 0; end <= arr.length; end++) {
    if (end === arr.length || arr[end] === ' ') {
      let l = start, r = end - 1;
      while (l < r) [arr[l], arr[r]] = [arr[r], arr[l]], l++, r--;
      start = end + 1;
    }
  }
  return arr.join('');
};
```

---
### 8. 存在重复元素 II (#219)
[链接](https://leetcode.cn/problems/contains-duplicate-ii/)
- **标签**：哈希，滑动窗口
- **思路**：Set 维护最近 k 个元素；超出窗口删除最左。
- **复杂度**：O(n) / O(k)
```js
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) set.delete(nums[i - k]);
  }
  return false;
};
```

---
### 9. 合并两个有序数组 (#88)
[链接](https://leetcode.cn/problems/merge-sorted-array/)
- **标签**：数组，双指针
- **思路**：从后往前放最大；若 nums2 剩余继续拷贝。
- **复杂度**：O(m+n) / O(1)
```js
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  while (j >= 0) nums1[k--] = nums2[j--];
};
```

---
### 10. 平衡二叉树 (#110)
[链接](https://leetcode.com/problems/balanced-binary-tree/)
- **标签**：树，DFS，剪枝
- **思路**：自底向上；高度/平衡一次返回；-1 作为不平衡哨兵。
- **复杂度**：O(n) / O(h)
```js
var isBalanced = function(root) {
  const dfs = (node) => {
    if (!node) return 0;
    const l = dfs(node.left); if (l === -1) return -1;
    const r = dfs(node.right); if (r === -1) return -1;
    if (Math.abs(l - r) > 1) return -1;
    return Math.max(l, r) + 1;
  };
  return dfs(root) !== -1;
};
```

---
### 11. 验证回文串 (#125)
[链接](https://leetcode.com/problems/valid-palindrome/)
- **标签**：字符串，双指针，过滤
- **思路**：左右指针从两端向中间；跳过非字母数字字符；对比小写后的字符；任一不等返回 false，全程通过返回 true。无需构造新字符串，原地判定。
- **复杂度**：O(n) / O(1)
```js
var isPalindrome = function(s) {
  const isAlphaNum = (ch) => /[0-9a-zA-Z]/.test(ch);
  let l = 0, r = s.length - 1;
  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) l++;
    while (l < r && !isAlphaNum(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++; r--;
  }
  return true;
};
```
---
### 12. 回文链表 (#234)
[链接](https://leetcode.com/problems/palindrome-linked-list/description/?envType=problem-list-v2&envId=stack)
- **标签**：链表，栈，快慢指针
- **思路**：
   1. 快慢指针定位中点
      -  slow 1步， fast 2步
      -  slow 走到末尾，slow正好中间
   2. 前半部分入栈
      - 慢指针 压入栈
   3. 处理奇偶长度
      - 偶数: fast指向最后一个节点 -> fast.next = null 
      - 奇数 fast指向中间节点 ->  fast = null
   4. 比较阶段
- **复杂度**：O(n) / O(n)
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 栈解法：回文链表
 * 思路：
 * 1. 快慢指针找到链表中点
 * 2. 将前半部分入栈
 * 3. 后半部分与栈中元素逐一比较
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    
    const stack = [];
    let slow = head, fast = head;
    
    // 快慢指针找中点，同时将前半部分入栈
    while (fast && fast.next) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 如果链表长度为奇数，跳过中间节点
    if (fast) {
        slow = slow.next;
    }
    
    // 后半部分与栈中元素比较
    while (slow) {
        if (slow.val !== stack.pop()) {
            return false;
        }
        slow = slow.next;
    }
    
    return true;
};

```
---
### 13. 无法吃午餐的学生数量 (#1700)
[链接](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/?envType=problem-list-v2&envId=queue)
- **标签**：队列，栈，模拟，循环检测
- **思路**：
   1. 模拟队列和栈操作
      - 学生队列：shift() 出队，push() 入队
      - 三明治栈：按 position 索引访问栈顶
   2. 匹配策略
      - 喜欢：学生离开，position++ 指向下一个三明治
      - 不喜欢：学生回到队尾，rotations++ 计数
   3. 循环检测避免超时
      - 当 rotations === students.length 时，所有学生都试过一轮
      - 说明没人要当前三明治，跳出循环
   4. 返回剩余学生数量
- **复杂度**：O(n²) / O(1) - 最坏情况每个学生绕队列一圈
```js
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let position = 0;
    let rotations = 0;

    while(students.length) {
        if (position >= sandwiches.length) break;

        const student = students.shift(),
            sandwich = sandwiches[position];
        
        if (sandwich === student) {
            position++;
            rotations = 0;
        } else {
            students.push(student);
            rotations++;
        };

        if (rotations === students.length) break;
    }

    return students.length;
};
```

---
## 后续计划占位
- 添加：哈希 / 栈专题错题总结
- 添加：常用模板（快慢指针 / 二分判定 / 递归遍历 / 反转链表）
- 添加：性能对比 & 题型归纳表

## 复盘 Checklist
- 是否写出多种解法？
- 是否标记复杂度？
- 是否记录第一反应错误点？
- 是否可提炼模板？

> 持续迭代：每次提交新增题目请按统一结构补充，确保可检索与复习效率。

