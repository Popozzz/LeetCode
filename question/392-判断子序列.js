/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0
  let right = s.length - 1

  let i = 0
  j = t.length - 1
  while (i <= j) {
    if (left !== right && i === j) return false
    if (s[left] === t[i]) {
      left++
    }
    if (s[right] === t[j]) {
      right--
    }

    if (left > right) return true
    i++
    j--
  }

  return s === t
}
