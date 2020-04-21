/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var len = nums.length, i = 1, count = 0;

    while(i<len && count<2) {
      if (nums[i] < nums[i-1]) {
				var pre = nums[i-2] || 0;
				if (nums[i] >= pre) {
					nums[i-1] = nums[i]
				} else {
					nums[i] = nums[i-1];
				}
	      count ++;
	    }

			i ++;
    }
    
    return count < 2;
};