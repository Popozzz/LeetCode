/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var n = matrix[0].length - 1;
  var positionI = n;
  var positionJ = 0;
  var result = 0;
  var copyCount = (n+1)*(n+1);

  // 二分查找
  while(positionI>=0 && positionJ<=n) {
      let mid = matrix[positionI][positionJ];
      let i = n;
      let j = 0;
      let count = 0;

      while (i>=0 && j <= n) {
          if (matrix[i][j] <= mid) {
              count = count + i + 1;
              j ++;
          } else {
              i --;
          }
      }

      if (k === count) return mid;

      if (count > k) {
          if (copyCount>=count) {
              copyCount = count;
              result = mid;
          }
          positionI --;
      } else {
          positionJ ++;
      }
  }

  return result;
};