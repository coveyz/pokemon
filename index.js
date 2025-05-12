/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // return nums.sort((a,b) => a - b)[Math.floor(nums.length / 2)];
    let count = 0, candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        };

        count += (num === candidate) ? 1 : -1;
    };

    return candidate;
};

console.log(
    majorityElement([2,2,1,1,1,2,2])
)
// console.log(
//     majorityElement([3,2,3])
// )