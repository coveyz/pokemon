const question = `
颠倒给定的 32 位无符号整数的二进制位。
提示：
请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。
`;

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	const number = n.toString().padStart(32, 0).split('').reverse().join('');

	return parseInt(number, 2);
};


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	// 1. 转换成二进制 并补齐32位
    let binaryStr = n.toString(2).padStart(32, '0');
	// 2. 反转 
    let reverseStr = binaryStr.split('').reverse().join('');
	// 3. 转换回整数
    return parseInt(reverseStr, 2) >>> 0 //确保返回无符号的整数
};