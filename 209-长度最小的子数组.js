/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var result;
  var sum = 0;
  var position = 0;

  for (var i=0; i<nums.length; i++) {
      sum = sum + nums[i];
      if (sum >= s) {
          let distance = i - position + 1;
          if (result == null || result > distance) {
              result = distance;
          }

          if (distance === 1) break;

          i = position;
          position = i + 1;
          sum = 0;
      }
  }

  return result || 0;
};