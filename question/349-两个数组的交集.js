/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = {}

  nums1.forEach((key) => {
    map[key] = true
  })

  return nums2.reduce((result, num) => {
    if (map[num] != undefined) {
      result.push(num)
      delete map[num]
    }
    return result
  }, [])
}
