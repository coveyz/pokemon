/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	const map = words.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		return acc;
	}, {});
	return words
		.filter((v, i) => words.indexOf(v) === i)
		.sort()
		.sort((a, b) => {
			if (map[a] === map[b]) {
				return map[a] - map[b];
			} else {
				return map[b] - map[a];
			}
		})
		.slice(0, k);
};

const words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'],
	k = 3;
console.log(topKFrequent(words, k));
