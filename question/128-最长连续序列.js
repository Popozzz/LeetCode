/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums);
  let maxLength = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let currentLength = 0;
    if (!numSet.has(num-1)){
      while(numSet.has(num)) {
        currentLength ++;
        num ++;
      }
      maxLength = Math.max(currentLength, maxLength)
    }
    // 剩余可连续字符<当前最大可连续字符，提前退出
    if ((nums.length - maxLength) < maxLength) break
  }

  return maxLength
};