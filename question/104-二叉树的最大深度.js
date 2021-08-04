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
var maxDepth = function (root) {
  var max = 0;

  function traverse(node, deep) {
    if (node) {
      deep++;
      traverse(node.left, deep);
      traverse(node.right, deep);
    } else {
      if (deep > max) {
        max = deep;
      }
    }
  }

  traverse(root, 0);

  return max;
};
