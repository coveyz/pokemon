const question = `字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）`;

const isFlipedString = (s1, s2) => {
	// console.log(s1.repeat(2), s1.repeat(2).indexOf(s2), s2);
	return s1.length === s2.length ? s1.repeat(2).indexOf(s2) > -1 : false;
};

console.log(isFlipedString('aa', 'aba'));
console.log(isFlipedString('wtaerbottle', 'erbottlewat'));
console.log(isFlipedString('waterbottle', 'erbottlewat'));
