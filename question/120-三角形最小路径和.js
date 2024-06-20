/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const rowSize = triangle.length
  const dp = [[]]
  dp[0][0] = triangle[0][0]

  for (let i = 1; i < rowSize; i++) {
    dp[i] = new Array(i + 1).fill(0)
    dp[i][0] += dp[i - 1][0] + triangle[i][0]
    dp[i][i] += dp[i - 1][i - 1] + triangle[i][i]
  }

  for (let i = 1; i < rowSize; i++) {
    const arr = triangle[i]
    const colSize = arr.length
    for (let j = 1; j < colSize - 1; j++) {
      const value = triangle[i][j]
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + value
    }
  }

  return Math.min.apply(null, dp[rowSize - 1])
}
