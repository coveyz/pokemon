const question = `
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
如果可以，返回 true ；否则返回 false 。
magazine 中的每个字符只能在 ransomNote 中使用一次。
`;

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	if (ransomNote.length > magazine.length) return false;
	const cnt = new Array(26).fill(0);

	for (const c of magazine) {
		cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
	}

	for (const c of ransomNote) {
		cnt[c.charCodeAt() - 'a'.charCodeAt()]--;

		if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) return false;
	}
	return true;
};

// let ransomNote = 'aa',magazine = 'aab';
// let ransomNote = 'aab',magazine = 'baa';
let ransomNote = 'a',
	magazine = 'b';

console.log(canConstruct(ransomNote, magazine));
