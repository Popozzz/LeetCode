/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let result = []

  function generate(str, leftCount, rightCount) {
    if (leftCount < 0) return
    if (rightCount < 0) return
    if (leftCount === 0 && rightCount === 0) {
      result.push(str)
      return
    }

    if (leftCount > 0) {
      generate(str + '(', leftCount - 1, rightCount)
    }

    if (leftCount < rightCount) {
      generate(str + ')', leftCount, rightCount - 1)
    }
  }

  generate('', n, n)

  return result
};