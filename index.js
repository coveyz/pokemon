/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const len1 = num1.length, 
        len2 = num2.length;
    const res = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mul = (num1[i] * 1 ) * (num2[j] * 1);
            const sum = mul + res[i + j + 1];

            res[i + j + 1] = sum % 10; // 当前
            res[i + j] += Math.floor(sum / 10); //进位
        }
    };

    let resStr = res.join('');

    while (resStr[0] === '0') {
        resStr = resStr.slice(1);
        
    };

    return resStr;
};

const num1 = "123", num2 = "456";

console.log(multiply(num1, num2));