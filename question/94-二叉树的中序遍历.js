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

// 遍历函数 left => mid => right
function traverse(node, arr) {
  if (node) {
    traverse(node.left, arr);
    arr.push(node.val);
    traverse(node.right, arr);
  }
}

var inorderTraversal = function (root) {
  var result = [];

  traverse(root, result);

  return result;
};
