/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result = [];
    let line = [];
    let lineLength = 0;

    /**
     * 
     * @param {string} line 当前行的单词列表
     * @param {number} lineLength 当前行单词的总字数
     * @param {number} maxWidth 最大宽度
     * @param {boolean} isLastLine  是否最后一行
     * @return {string} 格式化后的行
     */
    const formatLine = (line, lineLength, maxWidth, isLastLine) => {
        if (isLastLine || line.length === 1) {
            return line.join(' ') + ' '.repeat(maxWidth - lineLength - (line.length - 1));
        };

        let spaces = maxWidth - lineLength; //总空格数
        let gaps = line.length - 1; //单词间隔数
        let spacePerGap = Math.floor(spaces / gaps); //每个间隔的空格数
        let extraSpaces = spaces % gaps; //多余的空格数

        let justifiedLine = '';

        for (let i = 0; i < gaps; i++) {
            justifiedLine += line[i] + ' '.repeat(spacePerGap + (i < extraSpaces ? 1 : 0));
        };

        justifiedLine += line[gaps]
        return justifiedLine;
    };

    for (const word of words) {
        //预判 加入当前单词后 是否超出长度
        if (lineLength + word.length + line.length > maxWidth) {
            result.push(formatLine(line, lineLength, maxWidth, false));
            line = [];
            lineLength = 0;
        };

        line.push(word);
        lineLength += word.length;
    };

    result.push(formatLine(line, lineLength, maxWidth, true));
    return result;
};

console.log(fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."], 16
))