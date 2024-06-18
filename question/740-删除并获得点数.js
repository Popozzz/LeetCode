/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const maxVal = Math.max.apply(null, nums)
  const sum = new Array(maxVal + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    sum[val] += val
  }

  const size = sum.length
  const dp = []
  dp[0] = sum[0]
  dp[1] = Math.max(sum[0], sum[1])
  for (let i = 2; i < size; i++) {
    dp[i] = Math.max(dp[i - 2] + sum[i], dp[i - 1])
  }

  return dp[size - 1]
}
