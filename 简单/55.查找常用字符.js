const question = `给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
你可以按任意顺序返回答案。`;

/**
 *  把A[0]的字符串划分得到的字符串作为结果数组res。
    对arr进行过滤，具体操作是依次查找arr中的各个字符的次数，是否等于分别在A[1]~A[N - 1]中出现的次数，过滤掉次数不同的元素。
    对于遍历A[i]~A[N - 1]时，当前的A[k]判断res中的每一个字符是否存在于它，都需要把已经查到的值用真值代替，避免重复判断。
    返回过滤后的res。
 */

const commonChars = array => {
  let arr = array[0].split('')
  for (let index = 1; index < array.length; index++) {
    let otherArrayItem = array[index].split('')
    arr = arr.filter(item => {
      let index = otherArrayItem.indexOf(item)
      return index > -1 ? otherArrayItem[index] = 1 : false
    })
  }
  return arr
};

// console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(['cool', 'lock', 'cook']));
// console.log(commonChars(['acabcddd', 'bcbdbcbd', 'baddbadb', 'cbdddcac', 'aacbcccd', 'ccccddda', 'cababaab', 'addcaccd']));
