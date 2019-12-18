const nums = [3,2,4]

const target = 6


var test = function (nums, target) {
  let res = []
  for (let index = 0; index < nums.length; index++) {
    let goal = target - nums[index]
    if (nums.indexOf(goal) > -1 && nums[index] !== nums[nums.indexOf(goal)]) {
      res.push(index)
      res.push(nums.indexOf(goal))
      break;
    }
  }
  console.log(res);
  
}

test(nums, target);