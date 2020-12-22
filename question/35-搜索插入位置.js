/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    var mid = Math.floor(len / 2);
    var left = 0;
    var right = len;
    
    while(mid !== left && mid !== right) {
       
        if (nums[mid] === target) {
			left = right = mid;
			break;
		}
        
        if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
        mid = Math.floor((left + right) / 2);
    }
    
    if (nums[mid] < target) {
		return right;
	}
	return left;
};