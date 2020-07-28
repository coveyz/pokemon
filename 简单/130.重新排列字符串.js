const question = `给你一个字符串 s 和一个 长度相同 的整数数组 indices 。
请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。
返回重新排列后的字符串。`

var restoreString = function (s, indices) {
  const res = []
  for (let index = 0; index < indices.length; index++) {
    const element = indices[index];
    const item = s[index];
    res[element] = item
  }
  return res.join('')
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
