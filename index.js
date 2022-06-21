/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
	return address.replace(/\./g, '[.]');
};

const address = '1.1.1.1';

console.log(defangIPaddr(address));
