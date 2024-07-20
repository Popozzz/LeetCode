/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false

  const sMap = new Map()
  const tMap = new Map()

  const length = s.length

  for (let i = 0; i < length; i++) {
    const chr1 = s[i]
    const target1 = sMap.get(chr1)
    if (target1) {
      target1.push(i)
    } else {
      sMap.set(chr1, [i])
    }

    const chr2 = t[i]
    const target2 = tMap.get(chr2)
    if (target2) {
      target2.push(i)
    } else {
      tMap.set(chr2, [i])
    }
  }

  const chrSet = new Set()
  for (let i = 0; i < length; i++) {
    const chr1 = s[i]
    const chr2 = t[i]
    if (chrSet.has(chr1) || chrSet.has(chr2)) {
      continue
    }

    const target1 = sMap.get(chr1)
    const target2 = tMap.get(chr2)

    if (target1.length !== target2.length) return false
    const arrLength = target1.length
    for (let j = 0; j < arrLength; j++) {
      if (target1[j] !== target2[j]) return false
    }

    chrSet.add(chr1)
    chrSet.add(chr2)
  }

  return true
}
