/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  var max = 0;
  var count = 0;
  var i = 0;

  while (i < nums.length) {
    let current = nums[i];

    if (current === 1) {
      count ++;
    } else {
      count = 0;
    }

    if (count > max) {
      max = count;
    }
    i ++;
  }

  return max;
};