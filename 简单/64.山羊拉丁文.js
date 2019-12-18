const question = `给定一个由空格分割单词的句子 S。每个单词只包含大写或小写字母。
我们要将句子转换为 “Goat Latin”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。
山羊拉丁文的规则如下：
如果单词以元音开头（a, e, i, o, u），在单词后添加"ma"。
例如，单词"apple"变为"applema"。

如果单词以辅音字母开头（即非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"。
例如，单词"goat"变为"oatgma"。

根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从1开始。
例如，在第一个单词后添加"a"，在第二个单词后添加"aa"，以此类推。
返回将 S 转换为山羊拉丁文后的句子。`;

// 判断是不是元音
const isVowel = str => {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  const fistWord = str[0]
  return arr.includes(fistWord.toLocaleLowerCase())
};

const addA = (str,curIndex) => {
  for (let index = 1; index <= curIndex; index++) {
    str = `${str}` + 'a'
  }
  return str
}

const toGoatLatin = s => {
  let arr = []
  let strArr = s.split(' ');
  for (let index = 0; index < strArr.length; index++) {
    if (isVowel(strArr[index])) {
      // 元音的操作
      arr.push(addA(`${strArr[index]}ma`,index + 1))
    } else {
      // 不是元音的操作
      arr.push(addA(`${strArr[index].slice(1)}${strArr[index][0]}ma`,index + 1))
    }
  }
  return arr.join(' ')
};

console.log(toGoatLatin('I speak Goat Latin'));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));



