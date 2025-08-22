/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length

  let left = 0
  let right = n - 1
  let top = 0
  bottom = n - 1
  while (left < right) {
    let leftCol = []
    let rightCol = []
    for (let row = bottom; row >= top; row--) {
      leftCol.push(matrix[row][left])
      rightCol.push(matrix[row][right])
    }

    let topRow = []
    let bottomRow = []
    for (let col = left; col <= right; col++) {
      topRow.push(matrix[top][col])
      bottomRow.push(matrix[bottom][col])

      matrix[top][col] = leftCol.shift()
      matrix[bottom][col] = rightCol.shift()
    }

    for (let row = top; row <= bottom; row++) {
      matrix[row][left] = bottomRow.shift()
      matrix[row][right] = topRow.shift()
    }

    left++
    right--
    top++
    bottom--
  }

  return matrix
}
