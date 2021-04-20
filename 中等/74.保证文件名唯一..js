const question = `
给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。
由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。
返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。
`;
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
	let obj = {},
		arr = [];

	for (const name of names) {
		let key = name;
		while (key in obj) {
			key = `${name}(${obj[name]})`;
			obj[name] += 1;
		}
		obj[key] = 1;
		arr.push(key);
	}
	return arr;
};

console.log(getFolderNames(['gta', 'gta(1)', 'gta', 'avalon']));
console.log(getFolderNames(['pes', 'fifa', 'gta', 'pes(2019)']));
console.log(getFolderNames(['onepiece', 'onepiece(1)', 'onepiece(2)', 'onepiece(3)', 'onepiece']));
console.log(getFolderNames(['kaido', 'kaido(1)', 'kaido', 'kaido(1)']));
// console.log(
// 	getFolderNames([
// 		'd(2)(4)',
// 		'n',
// 		'y',
// 		'q(3)',
// 		'q(3)',
// 		'p(2)',
// 		'o',
// 		'k(4)',
// 		'x(1)',
// 		'm(1)',
// 		'a(2)',
// 		'z',
// 		'p(2)(3)',
// 		'd',
// 		'g',
// 		't',
// 		'n',
// 		'z(3)',
// 		'a',
// 		'd(2)',
// 		'b',
// 		't',
// 		'm',
// 		'r(1)(2)',
// 		'k',
// 		'c',
// 		'p(2)(1)',
// 		'c',
// 		'l(1)',
// 		'l',
// 		'b',
// 		'u',
// 		'o',
// 		'h(2)',
// 		'p(3)(3)',
// 		'd',
// 		'o',
// 		'c',
// 		'c',
// 		'v',
// 		'a',
// 		'g',
// 		'j',
// 		'm',
// 		'g(4)',
// 		'h',
// 		'b(2)',
// 		'r(3)',
// 		'e',
// 		'b(1)',
// 		'f(4)',
// 		'i',
// 		'm',
// 		'r',
// 		'm',
// 		'w(3)(4)',
// 		'p',
// 		'a',
// 		'g',
// 		'b',
// 		's',
// 		'r',
// 		'b(1)',
// 		'f',
// 		'k',
// 		'q',
// 		'p',
// 	])
// );
