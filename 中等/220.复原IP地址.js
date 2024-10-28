const question = `
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
`

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const isValid = (segment) => {
        if (segment.length > 1 && segment[0] === '0') return false;
        const number = Number(segment);
        return number >= 0 && number <= 255;
    };

    const backTrack = (start, path) => {
        if(path.length === 4 && start === s.length ) {
            result.push(path.join('.'));
            return;
        };
        if (path.length > 4 || start > s.length) return;

        for (let len = 1; len <= 3; len++) {
            let end = start + len,
                segment = s.slice(start, end);
            if (isValid(segment)) {
                path.push(segment);
                backTrack(end, path);
                path.pop();
            }
        }

    };

    const result = [];

    backTrack(0, []);

    return result;
};

console.log(restoreIpAddresses("25525511135")); 
console.log(restoreIpAddresses("0000")); 
console.log(restoreIpAddresses("1111")); 
console.log(restoreIpAddresses("010010")); 
console.log(restoreIpAddresses("10203040")); 