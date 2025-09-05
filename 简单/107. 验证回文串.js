const question = `给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。`;

const isPalindrome = (str) => {
	const newStr = str.replace(/\W/g, '').toLowerCase();
	const reverseOfNewStr = newStr.split('').reverse().join('');

	return newStr === reverseOfNewStr;
};

/**
 * 双指针
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
  const isAlphaNum = (ch) => {
    //   return /[0-9a-zA-Z]/.test(ch);
	const c = ch.charCodeAt(0);
	return (c >= 48 && c <= 57)      // 0-9
		|| (c >= 65 && c <= 90)      // A-Z
		|| (c >= 97 && c <= 122);    // a-z
  };

  let left = 0, 
    right = s.length - 1;

  while (left < right) {
    while(left < right && !isAlphaNum(s[left])) left++;
    while(left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    
    left++;
    right--;
  }

  return true;
}; 

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
