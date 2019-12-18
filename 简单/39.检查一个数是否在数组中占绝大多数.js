const question = `给出一个按 非递减 顺序排列的数组 nums，和一个目标数值 target。假如数组 nums 中绝大多数元素的数值都等于 target，则返回 True，否则请返回 False。
所谓占绝大多数，是指在长度为 N 的数组中出现必须 超过 N/2 次。`

const isMajorityElement = (array,target) => {
  const majorityNums = array.reduce((acc,cur) => {
    if (cur === target) {
      acc += 1
    }
    return acc
  },0)
  return majorityNums > (array.length / 2)
}

console.log(isMajorityElement([2,4,5,5,5,5,5,6,6],5));
console.log(isMajorityElement([10,100,101,101],101));
