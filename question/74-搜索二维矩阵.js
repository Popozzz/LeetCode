/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = matrix.length
  const col = matrix[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const num = matrix[i][j]

      if (num > target) return false
      if (num === target) return true
    }
  }

  return false
}
