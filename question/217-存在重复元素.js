/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  var countMap = {};
  var i = 0;

  while (i < nums.length) {
    let current = nums[i];
    
    if (countMap[current]) {
      return true;
    } else {
      countMap[current] = true;
    }
    
    i++;
  }

  return false;
};