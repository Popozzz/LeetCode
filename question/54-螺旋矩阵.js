/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const row = matrix.length - 1
  const col = matrix[0].length - 1

  const result = []

  while (matrix.length > 0) {
    result.push(...matrix.shift())

    for (let i = 0; i < matrix.length - 1; i++) {
      result.push(matrix[i].pop())
    }

    if (matrix.length) {
      result.push(...matrix.pop().reverse())
    }

    if (matrix[0] && matrix[0].length <= 0) {
      matrix = matrix.filter((m) => !!m.length)
    }
    for (let i = matrix.length - 1; i >= 0; i--) {
      result.push(matrix[i].shift())
    }
    if (matrix[0] && matrix[0].length <= 0) {
      matrix = matrix.filter((m) => !!m.length)
    }
  }

  return result
}
