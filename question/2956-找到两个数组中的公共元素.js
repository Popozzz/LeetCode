/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  let answer1 = 0
  let answer2 = 0
  const length = Math.max(nums1.length, nums2.length)

  for (let i = 0; i < length; i++) {
    const num1 = nums1[i]
    const num2 = nums2[i]

    if (set2.has(num1)) {
      answer1++
    }

    if (set1.has(num2)) {
      answer2++
    }
  }

  return [answer1, answer2]
}
