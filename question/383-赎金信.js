/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map()
  const magazineLength = magazine.length
  const ransomNoteLength = ransomNote.length

  for (let i = 0; i < magazineLength; i++) {
    const chr = magazine[i]
    const target = magazineMap.get(chr)
    if (target == null) {
      magazineMap.set(chr, 1)
    } else {
      magazineMap.set(chr, target + 1)
    }
  }

  for (let i = 0; i < ransomNoteLength; i++) {
    const chr = ransomNote[i]
    const target = magazineMap.get(chr)

    if (target == null || target <= 0) return false
    magazineMap.set(chr, target - 1)
  }

  return true
}
