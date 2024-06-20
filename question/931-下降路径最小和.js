/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const rowSize = matrix.length
  const colSize = matrix[0].length
  const dp = [[]]

  for (let i = 0; i < colSize; i++) {
    dp[0][i] = matrix[0][i]
  }

  for (let i = 1; i < rowSize; i++) {
    dp[i] = []
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      const value = matrix[i][j]
      const minValue = Math.min.apply(null, [
        dp[i - 1][j - 1] || Infinity,
        dp[i - 1][j],
        dp[i - 1][j + 1] || Infinity,
      ])
      dp[i][j] = minValue + value
    }
  }

  return Math.min.apply(null, dp[rowSize - 1])
}
