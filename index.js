/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {'(': 1, ')': -1, '{': 2, "}": -2, '[': 3, ']': -3},
        stack = [];

    for (let i = 0; i < s.length; i++) {
        
        const element = s[i], elementCount = map[element];
        if (elementCount > 0) stack.push(elementCount);
        else {
            const lastElementCount = stack.pop();
            if (lastElementCount + elementCount !== 0) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid("()")); // true