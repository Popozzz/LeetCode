/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var result;
  for (var i=0; i<nums.length; i++) {
      for (var j=i; j<nums.length; j++) {
          if (nums[j] < nums[i]) {
              let t = nums[i];
              nums[i] = nums[j];
              nums[j] = t;
          }
          
      }

      if (i === 0 && nums[0] > 1) {
          result = 1;
          break;
      }

      if (i > 0 && result == null && nums[i] > 1 && nums[i] - nums[i-1] > 1) {
          result = nums[i-1] < 0? 1 : nums[i-1]+ 1;
          break;
      }
  }

  if (result == null) {
      result = nums[nums.length-1] > 0? nums[nums.length-1] + 1 : 1;
  }

  return result;
};