const question = `
给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
`

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
   let result = '';

   while(columnNumber > 0) {
        columnNumber--;
        const charCode = (columnNumber % 26) + 65; // 65 is the char code for 'A'
        result = String.fromCharCode(charCode) + result;
        columnNumber = Math.floor(columnNumber / 26);
   }

   return result;
};

console.log(convertToTitle(1));    // A
// console.log(convertToTitle(28));   // AB
console.log(convertToTitle(701));  // ZY