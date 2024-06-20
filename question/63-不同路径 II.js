/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rowSize = obstacleGrid.length
  const colSize = obstacleGrid[0].length

  const dp = []

  for (let i = 0; i < rowSize; i++) {
    dp[i] = []
  }

  for (let i = 0; i < colSize; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      const left = dp[i][j - 1] || 0
      const top = dp[i - 1][j] || 0
      dp[i][j] = obstacleGrid[i][j] === 0 ? left + top : 0
    }
  }

  return dp[rowSize - 1][colSize - 1]
}
