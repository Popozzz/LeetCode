var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0)
  const length = nums.length
  let sum = 0

  for (let i = 0; i < length; i++) {
    if (2 * sum + nums[i] === total) {
      return i
    }
    sum += nums[i]
  }
  return -1
}
