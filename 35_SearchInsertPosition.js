/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    if (target > nums[high]) return high + 1
    if (target <= nums[low]) return 0
    while (high - low > 1) {
        let middle = Math.floor((high - low) / 2) + low
        if (target === nums[middle]) return middle
        if (target > nums[middle])
            low = middle
        else
            high = middle
    }
    return low + 1
};
