/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
	const start = [];
	const queue = [];

	for (let index = 0; index < s.length; index++) {
		const element = s[index];

		if (element === '(') {
			queue.push(index);
		} else if (element === '*') {
			start.push(index);
		} else if (element === ')') {
			if (queue.length === 0) {
				if (start.length === 0) return false;
				start.pop();
			} else {
				queue.pop();
			}
		}
	}

	if (queue.length > start.length) return false;

	while (queue.length && start.length) {
		if (queue.pop() > start.pop()) return false;
	}

	return true;
};

console.log(checkValidString('()'));
console.log(checkValidString('(*)'));
console.log(checkValidString('(*))'));
console.log(checkValidString('('));
console.log(checkValidString('(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())'));
