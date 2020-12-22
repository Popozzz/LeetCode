/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var i = 0;
  var len = nums.length;
  var sum = 0;
  var max = -Infinity;

  while (i < len) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }

    max = Math.max(sum, max);
    i ++;
  }

  return max;
};