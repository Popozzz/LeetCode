/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var i = 0;
  var result = [];

  while (i < numRows) {
    let len = i + 1;
    let target = [];

    target.push(1);

    for (let j = 1; j < len - 1; j++) {
      target.push(result[i - 1][j - 1] + result[i - 1][j]);
    }

    if (len > 1) {
      target.push(1);
    }

    result.push(target);
    i++;
  }

  return result;
};
