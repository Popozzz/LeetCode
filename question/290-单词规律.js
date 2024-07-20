/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const wordList = s.split(' ')
  const patterMap = new Map()
  const wordMap = new Map()
  const length = wordList.length

  if (length !== pattern.length) return false

  for (let i = 0; i < length; i++) {
    const word = wordList[i]
    const p = pattern[i]
    let wordTarget = wordMap.get(word)
    let patterTarget = patterMap.get(p)

    if (wordTarget == null) {
      wordTarget = p
      wordMap.set(word, wordTarget)
    }
    if (patterTarget == null) {
      patterTarget = word
      patterMap.set(p, patterTarget)
    }

    if (patterTarget !== word) return false

    if (wordTarget !== p) return false
  }

  return true
}
