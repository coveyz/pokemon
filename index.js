

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const acc = new Set();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (acc.has(element)) return true;
        acc.add(element);
        if (acc.size > k) {
            acc.delete(nums[i - k]);
        }
    };

    return false;
};

// console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); 
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true