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

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('aabb'))