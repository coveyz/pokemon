const question = `给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。`;

//* 1.0.0 重复字符串
var lengthOfLongestSubstring1 = function (s) {
	//* 1. 遍历整个 字符串
	//* 2. 判断 当前字符串 有没有在 无重复集合中出现
	//* 2-1 如果没重复 将值加入 缓存的 arr
	//* 2-1-1 如果缓存的 arr >= 之前保存的 arr 了  将之前保存的 arr 覆盖
	//* 2-2 如果重复了
	//* 2-2-1 如果出现的 在最后一个位置  清空 cacheArr 并且 将当前的值 加进去
	//* 2-2-2 如果出现在 第一个位置  删除第一个

	var arr = [];
	var cacheArr = [];

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		const postion = cacheArr.indexOf(element);
		if (postion === -1) {
			cacheArr.push(element);
			if (cacheArr.length >= arr.length) {
				arr = cacheArr.map((item) => item);
			}
		} else {
			if (postion === s.length - 1) {
				cacheArr[element];
			} else if (postion === 0) {
				cacheArr.shift();
				cacheArr.push(element);
				if (cacheArr.length >= arr.length) {
					arr = cacheArr.map((item) => item);
				}
			} else {
				const idx = postion;
				cacheArr = cacheArr.splice(idx + 1);
				cacheArr.push(element);
				if (cacheArr.length >= arr.length) {
					arr = cacheArr.map((item) => item);
				}
			}
		}
	}
	return arr.length;
};

//* 2.0.0 滑动窗口
const lengthOfLongestSubstring = (s) => {
	if (!s.length || s.length == 1) {
		return !s.length ? 0 : 1;
	}

	let occ = new Set(s[0]);
	let left = 0,
		right = 0,
		max = 0,
		len = s.length;

	while (right < len - 1) {
		if (occ.has(s[right + 1])) {
			occ.delete(s[left++]);
		} else {
			occ.add(s[++right]);
			max = Math.max(max, occ.size);
		}
	}

	return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring3 = function (s) {
	if (!s.length) return 0;

	let left = 0,
		right = 0,
		ans = -Infinity,
		res = 0;
	const map = new Map();

	while (right < s.length) {
		const rightItem = s[right];

		if (map.has(rightItem)) {
      //* 移动左指针 到重复字符串的 下一个位置
			while (s[left] !== rightItem) {
				map.delete(s[left]);
				left++;
			}
			left++;
			res = right - left + 1; //* 更新当前子串长度
		} else {
			map.set(rightItem, true);
			res++;
			ans = Math.max(ans, res);
		}

		right++;
	}

	return ans;
};

// const s = 'abcabcbb';
const s = 'pwwkew';

console.log(lengthOfLongestSubstring(s));
