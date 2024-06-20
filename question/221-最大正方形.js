/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rowSize = matrix.length
  const colSize = matrix[0].length
  const sum = [[]]
  let maxLength = 1

  for (let i = 0; i < colSize; i++) {
    sum[0][i] = (sum[0][i - 1] || 0) + Number(matrix[0][i])
  }

  for (let i = 1; i < rowSize; i++) {
    sum[i] = []
    sum[i][0] = sum[i - 1][0] + Number(matrix[i][0])
  }

  for (let i = 1; i < rowSize; i++) {
    const nextMaxLength = maxLength + 1
    for (let j = 1; j < colSize; j++) {
      const value = Number(matrix[i][j])
      sum[i][j] = value + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1]

      if (
        value === 1 &&
        nextMaxLength !== maxLength &&
        j >= nextMaxLength - 1
      ) {
        let square = 0
        const top = sum[i - nextMaxLength] ? sum[i - nextMaxLength][j] : 0
        const left = sum[i][j - nextMaxLength] || 0
        const extra = sum[i - nextMaxLength]
          ? sum[i - nextMaxLength][j - nextMaxLength] || 0
          : 0
        square = sum[i][j] - top - left + extra

        if (square === nextMaxLength * nextMaxLength) {
          maxLength = nextMaxLength
        }
      }
    }
  }

  return sum[rowSize - 1][colSize - 1] === 0 ? 0 : maxLength * maxLength
}
