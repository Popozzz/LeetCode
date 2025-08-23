/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map((_) => [])
  const cols = new Array(9).fill(0).map((_) => [])
  const boards = new Array(9).fill(0).map((_) => [])
  const size = 9
  let result = true

  for (let row = 0; row < size; row++) {
    for (col = 0; col < size; col++) {
      const num = board[row][col]

      if (num !== '.') {
        rows[row].push(num)
        cols[col].push(num)
        boards[
          Math.ceil((row + 1) / 3 - 1) * 3 + Math.ceil((col + 1) / 3) - 1
        ].push(num)
      }
    }
  }

  for (let i = 0; i < size; i++) {
    const rowValid = new Set(rows[i]).size === rows[i].length
    if (!rowValid) {
      result = false
      break
    }
    const colValid = new Set(cols[i]).size === cols[i].length
    if (!colValid) {
      result = false
      break
    }
    const boardValid = new Set(boards[i]).size === boards[i].length
    if (!boardValid) {
      result = false
      break
    }
  }

  return result
}
