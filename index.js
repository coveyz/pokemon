/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const result = s.split(' ');

    const reverseMagic = (str) => {
        let arr = str.split('')

        let left = 0, right =arr.length - 1;

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        };

        return arr.join('')
    };

    for (let i = 0; i < result.length; i++) {
        result[i] = reverseMagic(result[i])
    }

    return result.join(' ')
};

console.log(reverseWords(
    "Let's take LeetCode contest"
))