const question = `给你两个长度相同的整数数组 target 和 arr 。
每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。你可以执行此过程任意次。
如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。`

const canBeEqual = (target,arr) => {
 for (let index = 0; index < arr.length; index++) {
   const element = arr[index];
   if (target.indexOf(element) === -1) return false
 }
 return true
}

console.log(canBeEqual([1,2,3,4],[2,4,1,3]))
