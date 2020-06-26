/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i] > nums[j]) {
                let t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }
    }

    var start = 0, i = 1, end = nums.length - 1, min;
    
    for (var i=1; i<nums.length-1; i++) {
        start = 0;
        end = nums.length - 1;
        while(i > start && start < end && i < end) {
            let sum = nums[start] + nums[i] + nums[end];
            let minus = sum - target;
            if (min == null || Math.abs(minus) < Math.abs(min)) {
                min = minus;
            }

            if (sum > target) {
                end --;
            } else {
                start ++;
            }
        }
    }

    return target + min;
};