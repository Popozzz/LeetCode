/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const row = mat.length
  const col = mat[0].length
  const result = []
  const limit = Math.min(col - 1, row - 1)
  let i = 0
  let reserve = true

  while (mat.length > 0) {
    if (reserve) {
      for (let j = i; j >= 0; j--) {
        result.push(mat[j].shift())
      }
    } else {
      for (let j = 0; j <= i; j++) {
        result.push(mat[j].shift())
      }
    }

    mat = mat.filter((item) => !!item.length)
    i = Math.min.apply(null, [limit, i + 1, mat.length - 1])
    reserve = !reserve
  }

  return result
}
