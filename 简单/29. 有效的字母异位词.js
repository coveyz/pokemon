const question = `给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。`

const isAnagram = (s,t) => {
  if (s.length !== t.length) return false
  const newT = t.split('')
  const anagram = s.split('').reduce((acc,cur,index) => {
    acc[cur] ? acc[cur] ++ : acc[cur] = 1
    acc[newT[index]] ? acc[newT[index]] -- : acc[newT[index]] = -1
    return acc
  },{})
  return Object.keys(anagram).every(item => anagram[item] === 0)
}

/**
 ** 哈希表
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function (s, t) {
	if (s.length !== t.length) return false;

	const map = new Map();

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		map.set(element, map.has(element) ? map.get(element) + 1 : 1);
	}

	for (let index = 0; index < t.length; index++) {
		const element = t[index];
		if (!map.has(element)) return false;

		map.set(element, map.get(element) - 1);

		if (map.get(element) < 0) return false;
	}

	return true;
};

console.log(isAnagram('anagram','nagaram'));