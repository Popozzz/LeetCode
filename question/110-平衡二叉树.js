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
 * @return {boolean}
 */

// 获取树的高度
function getHeight(node) {
  if (node == null) return 0;

  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

// 检查节点平衡
function checkBalance(node) {
  if (node == null) return true;

  return (
    Math.abs(getHeight(node.left) - getHeight(node.right)) <= 1 &&
    checkBalance(node.left) &&
    checkBalance(node.right)
  );
}

var isBalanced = function (root) {
  return checkBalance(root);
};
