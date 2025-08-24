/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const len = nums.length
  const arr = []
  let prev = undefined
  for (let i = 0; i < len; i++) {
    const num = nums[i]

    if (num === 0) {
      if (prev === 0) {
        const zero = arr.pop()
        arr.push(zero + '0')
      } else {
        arr.push('0')
      }
    } else if (prev === 0 || prev === undefined) {
      arr.push(1)
    } else {
      const sum = arr.pop()
      arr.push(sum + 1)
    }

    prev = num
  }

  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') {
      max = Math.max((arr[i - 1] || 0) + (arr[i + 1] || 0), max)
    } else if (typeof arr[i] === 'string') {
      max = Math.max.apply(null, [max, arr[i - 1] || 0, arr[i + 1] || 0])
    } else {
      max = Math.max(max, arr[i] - 1)
    }
  }

  return max
}
