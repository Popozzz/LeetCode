/**
 * @param {string} columnTitle
 * @return {number}
 */
var letterMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

var prohibitMap = {
  1: 0,
  2: 26,
  3: 26 * 26,
  4: 26 * 26 * 26,
  5: 26 * 26 * 26 * 26,
  6: 26 * 26 * 26 * 26 * 26,
  7: 26 * 26 * 26 * 26 * 26 * 26,
};

var titleToNumber = function (columnTitle) {
  var i = columnTitle.length - 1,
    len = columnTitle.length,
    result = 0;
  while (i >= 0) {
    const current = columnTitle[i];
    if (i < len - 1) {
      result += letterMap[current] * prohibitMap[len - i];
    } else {
      result = letterMap[current];
    }
    i--;
  }

  return result;
};
