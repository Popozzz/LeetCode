/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let x = 0, y = 0;
  const X_LENGTH = board[0].length;
  const Y_LENGTH = board.length;
  let count = 0;

  for (;y<Y_LENGTH; y++) {
    for (x=0;x<X_LENGTH; x++) {
      if (board[y][x] === 'X') {
        nextX = eachXShip(board, x + 1, y)
        eachYShip(board, x, y + 1)
        board[y][x] = '.'
        x = nextX
        count ++
      }
    }
  }

  return count
};

const eachXShip = function(board, x = 0, y = 0) {
  const X_LENGTH = board[0].length
  for (let i=x;i<X_LENGTH; i++) {
    if (board[y][i] === 'X') {
      board[y][i] = '.'
    } else {
      return i
    }
  }
}

const eachYShip = function(board, x = 0, y = 0) {
  const Y_LENGTH = board.length
  for (let i=y;i<Y_LENGTH; i++) {
    if (board[i][x] === 'X') {
      board[i][x] = '.'
    } else {
      return i
    }
  }
}