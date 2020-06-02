const question = `给你两个整数数组 nums 和 index。你需要按照以下规则创建目标数组：
目标数组 target 最初为空。
按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i] 。
重复上一步，直到在 nums 和 index 中都没有要读取的元素。
请你返回目标数组。
题目保证数字插入位置总是存在。`;

const createTargetArray = (nums, position) => {
  var res = []
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const curElmenetPostion = position[index]
      res.splice(curElmenetPostion,0,element)
  }
  return res  
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]));
console.log(createTargetArray([1],[0]));
