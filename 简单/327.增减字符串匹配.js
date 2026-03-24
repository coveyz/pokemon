const question = `
由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:

如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I' 
如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D' 
给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。
`;

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const n = s.length;

    const arr = new Array(n).fill(0).map((_, idx) => idx);


    console.log()

    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'D') {
            const lager = arr.pop();
            result.push(lager);
        } else {
            const smaller = arr.shift();
            result.push(smaller);
        };
    };

    result.push(...arr);

    return result;
};


/**
 * 贪心 + 双指针
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let low = 0, 
        high = s.length;

    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'D') result.push(high--);
        else result.push(low++)
    };
    result.push(low)

    return result;
};

console.log(diStringMatch("IDID"));