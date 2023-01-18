const question = `
给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：
字符（'a' - 'i'）分别用（'1' - '9'）表示。
字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
返回映射之后形成的新字符串。
题目数据保证映射始终唯一。
`

const Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
	let tmpResult = '',
		tmp = '',
		tmpLen = tmp.length;
	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (element === '#') {
			if (tmp.length < 2) {
				tmpResult += tmp;
			} else {
				const start = tmp.slice(0, tmp.length - 2),
					end = tmp.slice(tmp.length - 2, tmp.length) * 1;
				// console.log('start=>', start, 'end=>', end, 'tmp=>', tmp);
				tmpResult += start;
        tmpResult += Alphabet[end - 1]
			}

			tmp = '';
		} else {
			tmp += element;
		}
	}

  if (tmp.length) {
    tmpResult += tmp
  }

  let result = '';

  for (let index = 0; index < tmpResult.length; index++) {
    const element = tmpResult[index]
    if (isNaN(element * 1)) {
      result += element
    } else {
      result += Alphabet[element - 1]
    }
  }


  return result
};

console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets('1326#22#'));

// var tmp = '1326';
// console.log('first', tmp.slice(0, tmp.length - 2));
// console.log('second', tmp.slice(tmp.length - 2, tmp.length));
