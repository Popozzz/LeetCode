/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(result, x) {
        return result ^ x;
    }, 0);
};