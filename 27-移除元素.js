/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    
    var result = 0;
    var i = 0;
    
    for (i = 0; i<len; i++) {
        if (nums[i] !== val) {
            nums[result] = nums[i];
            result ++;
        }
    }
    
    return result;
};