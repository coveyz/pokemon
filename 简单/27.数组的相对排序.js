const question = `给你两个数组，arr1 和 arr2，
arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。`

// 先将 arr1 按照 arr2 进行排序
// 然后 再用
const relativeSortArray = (arr1,arr2) => {
  const newArr = arr2.reduce((acc,cur) => {
    while (arr1.includes(cur)) {
      const idx = arr1.indexOf(cur)
      const tmp = arr1.splice(idx,1)
      acc = acc.concat(tmp)
    }
    return acc
  },[])
  return newArr.concat(arr1.sort((a,b) => a-b))
}


console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]));
