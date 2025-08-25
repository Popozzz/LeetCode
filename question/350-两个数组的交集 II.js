/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {}

  nums1.forEach((key) => {
    if (map[key] == undefined) {
      map[key] = 1
    } else {
      map[key]++
    }
  })

  return nums2.reduce((result, num) => {
    if (map[num] > 0) {
      result.push(num)
      map[num]--
    }
    return result
  }, [])
}
