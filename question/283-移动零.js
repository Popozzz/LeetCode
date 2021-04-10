/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  var positionMap = {}
  var i = 0;
  var start = 0;
  var end = nums.length - 1

  while (i < nums.length) {
    let current = nums[i];

    if (current === 0) {
      positionMap[end] = current;
      end --;
    } else {
      positionMap[start] = current;
      start ++;
    }
    i ++;
  }

  i = 0;
  while (i < nums.length) {
    nums[i] = positionMap[i]
    i ++;
  }
};