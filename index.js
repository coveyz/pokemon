/**
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


console.log(firstUniqChar("leetcode")); // 0
// console.log(firstUniqChar("loveleetcode")); // 2
// console.log(firstUniqChar("aabb")); // -1
// console.log(firstUniqChar("")); // -1
// console.log(firstUniqChar("a")); // 0
// console.log(firstUniqChar("ab")); // 0