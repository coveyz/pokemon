const question = `
输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
`;

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
	const res = new Set(),
		paths = [],
		visited = [];

	const dfsHelper = (arr, paths, res, visited) => {
		// 走到了叶子节点
		if (arr.length === paths.length) {
			res.add(paths.join(''));
			return;
		}

		for (let index = 0; index < arr.length; index++) {
			if (visited[index]) continue;
			visited[index] = true;
			// goto next level;
			paths.push(arr[index]);
			// console.log('element=>', arr[index], 'paths=>', paths);
			dfsHelper(arr, paths, res, visited);
			paths.pop();
			visited[index] = false;
		}
	};

	dfsHelper([...s], paths, res, visited);

	return Array.from(res);
};

const s = 'abc';

console.log(permutation(s));
