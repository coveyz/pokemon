const question = `在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。返回可以通过分割得到的平衡字符串的最大数量。`;

const balancedStringSplit = str => {
	let num = 0;
	return str.split('').reduce((acc, cur) => {
		if (cur === 'L') {
			num += 1;
		} else {
      num -=1
    }
    if (num === 0) {
      acc +=1
    }
    return acc
	}, 0);
};

console.log(balancedStringSplit('RLRRLLRLRL'));
