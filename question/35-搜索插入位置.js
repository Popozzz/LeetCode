/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = ((left + right) / 2) >> 0;

  while (left <= right) {
    const current = nums[mid];

    if (current === target) return mid;

    if (current > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = ((left + right) / 2) >> 0;
  }

  return left;
};
