/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length

  const rowZero = {}
  const colZero = {}

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const num = matrix[i][j]

      if (num === 0) {
        rowZero[i] = true
        colZero[j] = true
      }

      if (rowZero[i] || colZero[j]) {
        matrix[i][j] = 0
      }
    }
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      if (rowZero[i] || colZero[j]) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
}
