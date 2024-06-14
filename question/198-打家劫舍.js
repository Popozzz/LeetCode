/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp = [];
  const exist = [];
  const length = nums.length
  dp[0] = nums[0];
  exist[0] = 1
  
  for (let i=1; i<length; i++) {
    if (exist[i-1] === 1) {
      dp[i] = Math.max(dp[i-1], (dp[i-2] || 0) + nums[i])
    } else {
      dp[i] = Math.max(dp[i-1]+ nums[i], dp[i-2] || 0)
    }

    if (dp[i] === dp[i-1] || dp[i] === dp[i-2]) {
      exist[i] = 0
    } else {
      exist[i] = 1
    }
  }

  return dp[length-1]
};