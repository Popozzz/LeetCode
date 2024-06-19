/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = [[]]
  const colSize = grid[0].length
  const rowSize = grid.length
  dp[0][0] = grid[0][0]

  for (let i = 1; i < colSize; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
  }

  for (let i = 1; i < rowSize; i++) {
    dp[i] = []
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < colSize; j++) {
      const val = grid[i][j]
      dp[i][j] = Math.min(dp[i - 1][j] + val, dp[i][j - 1] + val)
    }
  }

  return dp[rowSize - 1][colSize - 1]
}
