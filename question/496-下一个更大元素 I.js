/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = []
  const length1 = nums1.length
  const length2 = nums2.length
  let max = 0
  let map = {}
  for (let i = 0; i < length2; i++) {
    const value = nums2[i]
    map[value] = -1

    for (let j = i + 1; j < length2; j++) {
      const num2 = nums2[j]
      if (num2 > value) {
        map[value] = num2
        break
      }
    }
  }

  for (let i = 0; i < length1; i++) {
    result[i] = map[nums1[i]]
  }

  return result
}
