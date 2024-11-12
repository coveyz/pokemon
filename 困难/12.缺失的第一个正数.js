/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const acc = new Set(nums);
    let index = 1;

    while (acc.has(index)) {
        index++;
    }

    return {acc, index}
};

console.log(firstMissingPositive([1,2,0]))
console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive([7,8,9,11,12]))