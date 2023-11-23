const question = `
「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

HTML 里这些特殊字符和它们对应的字符实体包括：

双引号：字符实体为 &quot; ，对应的字符是 " 。
单引号：字符实体为 &apos; ，对应的字符是 ' 。
与符号：字符实体为 &amp; ，对应对的字符是 & 。
大于号：字符实体为 &gt; ，对应的字符是 > 。
小于号：字符实体为 &lt; ，对应的字符是 < 。
斜线号：字符实体为 &frasl; ，对应的字符是 / 。
给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。
`

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const map = {
        "&quot;": '"',
        "&apos;": "'",
        "&gt;": ">",
        "&lt;": "<",
        "&frasl;": "/",
        "&amp;": "&",
    };

    const res = [];

    for (let index = 0; index < text.length;) {
        let isEntity = false;
        if (text[index] === '&') {
            for (const [key, value] of Object.entries(map)) {
                if (text.slice(index, index + key.length) === key) {
                    res.push(value);
                    isEntity = true;
                    index += key.length;
                    break;
                }
            }
        }

        if (!isEntity) {
            res.push(text[index]);
            index++
        }
    }

    // let index = 0;
    // while (index < text.length) {
    //     let isEntity = false;

    //     if (text[index] === '&') {
    //         for (const [key, value] of Object.entries(map)) {
    //             if (text.slice(index, index + key.length) === key) {
    //                 res.push(value);
    //                 isEntity = true;
    //                 index += key.length;
    //                 break;
    //             }
    //         }
    //     }

    //     if (!isEntity) {
    //         res.push(text[index]);
    //         index++;
    //     }
    // }

    return res.join('');
};

const text = "&amp; is an HTML entity but &ambassador; is not.";
// const text = "and I quote: &quot;...&quot;"

console.log(entityParser(text));