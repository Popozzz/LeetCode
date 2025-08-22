/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let rows = grid.length // 行
  let cols = grid[0].length // 列
  let top = rows - 1
  let bottom = 0
  let left = cols - 1
  let right = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const num = grid[i][j]
      if (num === 1) {
        left = Math.min(j, left)
        top = Math.min(i, top)

        right = Math.max(j, right)
        bottom = Math.max(i, bottom)
      }
    }
  }

  return (bottom - top + 1) * (right - left + 1)
}
