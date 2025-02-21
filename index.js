/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;

    if (n === 0 || s[0] === '0') return 0;

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0]  === '0' ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        if (s[i - 1] !== '0') {
            dp[i]  += dp[i - 1];
        }
        const twoDigit = Number(s[i -2] + s[i - 1]);
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    };

    return dp[n];
};



console.log(numDecodings('12')); // 2
console.log(numDecodings("226"))