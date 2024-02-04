/**
 * @param {string} s
 * @return {boolean}
 */
const vowelMap = new Map(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].map(i => [i, true]))

var halvesAreAlike = function (s) {
  let left = 0, right = 0;
  const mid = (s.length / 2) - 1;

  s.split('').forEach((letter, index) => {
    if (vowelMap.get(letter)) {
      if (index <= mid) {
        left++
      } else {
        right++
      }
    }
  })

  return left === right
};