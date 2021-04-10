/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  var countMap = {};
  var i = 0;
  var max = 0;

  while (i < nums.length) {
      let current = nums[i];
      
      if (countMap[current]) {
        countMap[current] ++;
      } else {
        countMap[current] = 1;
      }

      if (countMap[current] > max) {
        countMap.max = current;
        max = countMap[current];
      }
      i ++;
  }

  return countMap.max
};