const question = `给定两个字符串, A 和 B。

A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True.`

const rotateString = (A,B) => {
  if (A === B) return true
  for (let index = 0; index < A.length; index++) {
    A = A.slice(1) + A[0]
    if (A === B) return true
  }
  return false
}

console.log(rotateString('abcde','cdeab'))
// console.log(rotateString('abcde','abced'))