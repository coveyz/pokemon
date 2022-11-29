/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
	if (s1 === s2) {
		return true;
	}

	const diff = [];

	for (let index = 0; index < s1.length; index++) {
		if (s1[index] !== s2[index]) {
			if (diff.length >= 2) {
				return false;
			}
			diff.push(index);
		}
	}

	if (!diff.length) return true;
	else if (diff.length !== 2) return false;

	return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};

// const s1 = 'bank',s2 = 'kanb';
// const s1 = "attack", s2 = "defend"
const s1 = "siyolsdcjthwsiplccjbuceoxmpjgrauocx",s2 = "siyolsdcjthwsiplccpbuceoxmjjgrauocx"
// const s1 = 'abca',s2 = 'abcc';

console.log(areAlmostEqual(s1, s2));
