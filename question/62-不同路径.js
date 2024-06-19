/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [[]]
  dp[0][0] = 1
  for (let i = 1; i < n; i++) {
    dp[0][i] = 1
  }

  for (let i = 1; i < m; i++) {
    dp[i] = []
    dp[i][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }

  return dp[m - 1][n - 1]
}
