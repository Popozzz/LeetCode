/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const length = prices.length
  const dp = [[]]
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  dp[0][2] = 0

  for (let i = 1; i < length; i++) {
    dp[i] = []
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
    dp[i][1] = dp[i - 1][0] + prices[i]
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
  }

  return Math.max(dp[length - 1][1], dp[length - 1][2])
}
