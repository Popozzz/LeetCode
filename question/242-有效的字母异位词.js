/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const length = s.length
  if (length !== t.length) return false

  const chrMap = new Map()
  for (let i = 0; i < length; i++) {
    const chr1 = s[i]
    const chr2 = t[i]

    chrMap.set(chr1, (chrMap.get(chr1) || 0) + 1)
    chrMap.set(chr2, (chrMap.get(chr2) || 0) - 1)
  }

  const countList = chrMap.values()
  for (count of countList) {
    if (count !== 0) return false
  }

  return true
}
