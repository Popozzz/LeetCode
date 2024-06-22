/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = []
  const length = nums.length
  let maxLength = 1
  dp[0] = 1
  for (let i = 1; i < length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    maxLength = Math.max(dp[i], maxLength)
  }

  return maxLength
}
