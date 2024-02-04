/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  const matchList = nums.filter((num, index) => {
    let count = 0
    while (index > 0) {
      if (index & (1 > 0)) {
        count++
      }

      index = index >> 1
      if (count > k) break
    }
    return count === k
  })

  return matchList.reduce((sum, num) => (sum += num), 0)
}
