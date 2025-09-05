const question = `给你一个以行程长度编码压缩的整数列表 nums 。
考虑每对相邻的两个元素 [freq, val] = [nums[2*i], nums[2*i+1]] （其中 i >= 0 ），每一对都表示解压后子列表中有 freq 个值为 val 的元素，你需要从左到右连接所有子列表以生成解压后的列表。
请你返回解压后的列表。`

const decompressRLElist = nums => {
  const res = []
  for (let index = 1; index <= nums.length; index+=2) {
    const perElment = nums[index -1 ];
    const element = nums[index]
    for (let index = 0; index < perElment; index++) {
      res.push(element)
    }
  }
  return res
}

console.log(decompressRLElist([1,2,3,4]))
console.log(decompressRLElist([1,1,2,3]))