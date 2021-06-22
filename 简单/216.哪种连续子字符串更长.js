/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
	if (s.indexOf(1) === -1) return false;
	if (s.indexOf(0) === -1) return true;
	const oneNumber = fineTarget('1', s);
	const zeroNumber = fineTarget('0', s);
	// console.log('one=>', oneNumber, 'zero=>', zeroNumber);
	// console.log('zero=>', zeroNumber);
	return oneNumber > zeroNumber;
};

const fineTarget = (target, s) => {
	const findTargetPos = s.indexOf(target);
	let targetNumber = 0;
	let tmp = 0;
	for (let index = findTargetPos; index < s.length; index++) {
		const element = s[index];
		// console.log('element=>', element);
		if (element === target) {
			tmp += 1;
			targetNumber = Math.max(targetNumber, tmp);
		} else {
			targetNumber = Math.max(targetNumber, tmp);
			tmp = 0;
		}
	}
	return targetNumber;
};

console.log(checkZeroOnes('1101'));
console.log(checkZeroOnes('111000'));
console.log(checkZeroOnes('110100010'));
