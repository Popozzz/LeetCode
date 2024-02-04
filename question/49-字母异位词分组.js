/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  strs.forEach(str => {
    const array = str.split('').sort()
    const key = array.join('')
    const list = map.get(key) || []
    list.push(str)
    map.set(key, list)
  })

  return Array.from(map.values())
};