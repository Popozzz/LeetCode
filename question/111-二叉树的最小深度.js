/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  var min = 0;

  function traverse(node, deep = 0) {
    if (min && deep > min) return;

    if (node) {
      deep++;

      traverse(node.left, deep);
      traverse(node.right, deep);

      if (node.left == null && node.right == null) {
        min = min ? Math.min(deep, min) : deep;
      }
    }
  }

  traverse(root);

  return min;
};
