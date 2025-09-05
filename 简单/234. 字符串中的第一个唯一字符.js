const question = `
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
`;

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const container = {};
	const len = s.length;
	for (let index = 0; index < len; index++) {
		const element = s[index];

		if (container.hasOwnProperty(element)) {
			continue;
		} else {
			const pos = s.lastIndexOf(element);
			if (pos === index) {
				return index;
			} else {
				container[element] = true;
			}
		}
	}

	return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const map = new Map(), acc = new Set();
	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (acc.has(element)) continue
		else if (map.has(element)) {
			map.delete(element);
			acc.add(element);
		} else {
		map.set(element,index);
		}
	}
	return map.size > 0 ? map.values().next().value : -1
};

/**
 * 队列解法
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const cnt = new Map(), 
        queue = [];
    let head = 0;

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        cnt.set(ch, (cnt.get(ch) || 0)+ 1);
        queue.push([ch, i]);

        while(head < queue.length && cnt.get(queue[head][0]) > 1) head++;
    };

    return head < queue.length ? queue[head][1] : -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
