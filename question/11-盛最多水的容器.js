/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left = 0, right = height.length-1
  let max = getSquare(left, right)

  function getSquare(left, right) {
    if (left >= right) return 0
    if (right >= height.length) return 0

    return Math.min(height[left], height[right]) * (right-left)
  }
  
  while(left < right) {
    if (height[right]> height[left]) {
      left ++
    } else {
      right --
    }

    max = Math.max(getSquare(left, right), max)
  }

  return max
};