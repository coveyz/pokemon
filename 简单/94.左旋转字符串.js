const question = `字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。`;

const reverseLeftWords = (str,num) => {
  var strArr = str.split('')
  for (let index = 0; index < num; index++) {
    const element = strArr[index];
    const firstElmenet = strArr[0]
    strArr = strArr.splice(1)
    strArr.push(firstElmenet)
  }
  return strArr.join('')
}



/**
 ** 切拼 字符串
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords2 = function (s, n) {
	const arr = s.split('');
	const start = arr.slice(0, k),
		end = arr.slice(k, arr.length);
	return end.concat(start).join('');
};

console.log(reverseLeftWords('abcdefg',2))
console.log(reverseLeftWords('lrloseumgh',6))