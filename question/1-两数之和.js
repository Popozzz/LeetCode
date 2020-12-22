/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var l = nums.length;
    var map = new Map();
    var result = 0;
    for(var i=0; i<l; i++) {
        result = target - nums[i];
        if(map.get(result) !== undefined) {
            return [map.get(result), i]
        }
        map.set(nums[i], i);
    }
};