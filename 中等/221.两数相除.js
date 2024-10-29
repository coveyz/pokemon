const question = `
给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
返回被除数 dividend 除以除数 divisor 得到的 商 。
注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−231,  231 − 1] 。本题中，如果商 严格大于 231 − 1 ，则返回 231 − 1 ；如果商 严格小于 -231 ，则返回 -231 。
`

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // 特殊处理
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) return dividend === -2147483648 ? 2147483647 : -dividend;

    // 符号判断
    const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    let absDividend = Math.abs(dividend),
        absDivisor = Math.abs(divisor);

    if (absDividend === absDivisor) {
        return sign
    }
    
    let quotient = 0;

    // 使用位移操作加速减法过程
    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor, multiple = 1;

        console.log('tempDivisor', tempDivisor, multiple,'tempDivisor<<1=>',tempDivisor << 1 );

        while (absDividend >= (tempDivisor << 1)) {
            console.log('>>', tempDivisor << 1)
            // 防止溢出
            if (tempDivisor << 1 < 0) break;
            tempDivisor <<= 1;
            multiple <<= 1;

            console.log('while--->', tempDivisor, multiple)
        }
        absDividend -= tempDivisor;
        quotient += multiple;
    }

    quotient = sign === 1 
        ? Math.min(quotient, 2147483647) 
        : Math.max(-quotient, -2147483648);

    return quotient;
};

console.log(divide(-2147483648, -3));