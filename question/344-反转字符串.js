/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var left = 0,
    right = s.length - 1;

  while (left < right) {
    let t = s[left];
    s[left] = s[right];
    s[right] = t;

    left++;
    right--;
  }
};
