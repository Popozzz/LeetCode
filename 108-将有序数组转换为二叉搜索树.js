/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function getNode(nums, left, right) {
      if (left > right) {
          return null;
      }

      let mid = (left + right)/2 ^ 0;
      let newNode = new TreeNode(nums[mid]);
      
      var root = new TreeNode(nums[mid]);
      root.left = getNode(nums, left, mid - 1); // 小的在左边往左边找
      root.right = getNode(nums, mid + 1, right);

      return root;
  }

  return getNode(nums, 0, nums.length - 1);
};