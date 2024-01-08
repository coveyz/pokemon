/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a,b) => a - b);

    const result = [];

    for (let index = 0; index < nums.length - 2; index++) {
        if (index > 0 && nums[index - 1] === nums[index]) continue;

        let left = index +1, right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[index] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[index], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right -1]) {
                    right--;
                }
                left++;
                right--;
            } 
            else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
