const question = `
未知 整数数组 arr 由 n 个非负整数组成。
经编码后变为长度为 n - 1 的另一个整数数组 encoded ，其中 encoded[i] = arr[i] XOR arr[i + 1] 。例如，arr = [1,0,2,1] 经编码后得到 encoded = [1,2,3] 。
给你编码后的数组 encoded 和原数组 arr 的第一个元素 first（arr[0]）。
请解码返回原数组 arr 。可以证明答案存在并且是唯一的。
`;

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = (encoded, first) => {
	encoded.unshift(first);

	encoded = encoded.reduce((acc, cur, index) => {
		encoded[index + 1] = cur ^ encoded[index + 1];
		acc.push(cur);
		return acc;
	}, []);

	return encoded;
};
console.log(decode([1, 2, 3], 1));
