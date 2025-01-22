/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()

    for (let index = 0; index < nums.length; index++) {
        let complement = target - nums[index]

        if (map.has(complement)) {
            return [map.get(complement), index]
        }

        map.set(nums[index], index)
    }
};