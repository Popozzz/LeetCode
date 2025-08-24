/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const arr = path.split('/')
  const resultArr = []
  const len = arr.length

  while (arr.length) {
    const str = arr.pop()
    if (str === '.' || str === '') {
      continue
    }
    if (str === '..') {
      let back = 1

      while (back > 0 && arr.length) {
        const prev = arr.pop()
        if (prev === '..') {
          back++
          continue
        } else if (prev === '.' || prev === '') {
          continue
        } else {
          back--
        }
      }
      continue
    }

    resultArr.push(str)
  }

  resultArr.reverse()

  return '/' + resultArr.join('/')
}
