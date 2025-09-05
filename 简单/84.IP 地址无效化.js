const question = `给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。`;

const defangIPaddr = (address) => {
	let str = '';
	for (let index = 0; index < address.length; index++) {
		if (address[index] === '.') {
			str += '[.]';
		} else {
			str += address[index];
		}
	}
	return str;
};

/**
 ** 替换字符串
 * @param {string} address
 * @return {string}
 */
var defangIPaddr2 = function (address) {
	return address.replace(/\./g, '[.]');
};

console.log(defangIPaddr('1.1.1.1'));
