/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  var max = 0; // max = (A[i] + i) + (A[j] - j) 条件： i<j
  var maxI = 0; // maxI = A[i] + i的最大值

  for (var i=0; i<A.length; i++) {
    var currentI = A[i] + i;
    var currentJ = A[i] - i;
    
    if (maxI + currentJ > max) {
      max = maxI + currentJ;
    }

    if (currentI > maxI) {
      maxI = currentI;
    }
  }
  
  return max;
};