const question = `
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
初始化 A 和 B 的元素数量分别为 m 和 n。
`;
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
const merge = (A, m, B, n) => {
	// const aArr = A.slice(0, m);
	// const bArr = B.slice(0, n);
	// return aArr.concat(bArr).sort((a, b) => a - b);
	A.splice(m, A.length - m, ...B);
	A.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
