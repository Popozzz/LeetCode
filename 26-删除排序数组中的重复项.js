/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var current = 1;
    var len = nums.length;
    
    for (var i=1; i<len; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[current] = nums[i];
            current ++;
        }
    }
    return current;
};