/**
 * 解法1：递归解法（会超时但是可以根据递归写法进行反递归）
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length - 1;;
  var n = obstacleGrid[0].length - 1;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m][n] === 1) return 0;

  function getRoad(i, j) {
      if (i< 0 || j<0) {
          return 0;
      }

      if (obstacleGrid[i][j] === 1) {
          return 0;
      }

      if (i === 0 && j === 0) return 1;

      return getRoad(i-1, j) + getRoad(i, j-1);
  }


  return getRoad(m, n);
};

/**
 * 解法二
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length - 1;;
  var n = obstacleGrid[0].length - 1;
  var deque = [[0, 0]];
  var visited = [];

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m][n] === 1) return 0;
  if (m === 0 && n === 0 && obstacleGrid[m][n] === 0) return 1;

  while (deque.length > 0) {
      let left = false;
      let top = false;
      let position = deque.shift();
      let i = position[0];
      let j = position[1];

      if (obstacleGrid[i][j] !== false && i+j !== 0) {
          if (i-1 >= 0) {
              left = i-1 === 0 && j === 0? 1 : obstacleGrid[i-1][j];
          }

          if (j-1 >= 0) {
              top = j-1 === 0 && i === 0? 1 : obstacleGrid[i][j-1];
          }

          if (left === false && top === false) {
              obstacleGrid[i][j] = false;
          } else {
              obstacleGrid[i][j] = (left || 0) + (top || 0);
          }
      }

      if (i+1<=m && j<=n) {
          if (visited[i+1] == null) {
              visited[i+1] = [];
          }

          if (obstacleGrid[i+1][j] === 1) {
              obstacleGrid[i+1][j] = false;
          } 
          
          if(!visited[i+1][j]){
              deque.push([i+1, j]);
          }

          visited[i+1][j] = true;
      }

      if (i<=m && j+1<=n) {
          if (visited[i] == null) {
              visited[i] = [];
          }

          if (obstacleGrid[i][j+1] === 1) {
              obstacleGrid[i][j+1] = false;
          } 
          
          if(!visited[i][j+1]){
              deque.push([i, j+1]);
          }

          visited[i][j+1] = true;
      }
  }

  return obstacleGrid[m][n];
};