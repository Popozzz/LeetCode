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
 * @return {number[]}
 */
// r => l => m
var postorderTraversal = function (root) {
  var result = [];

  function traverse(node) {
    if (node) {
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }
  }

  traverse(root);

  return result;
};
