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
var isSymmetric = function (root) {
  var flag = true;

  function traverse(leftNode, rightNode) {
    if (!flag) return;

    if (leftNode && rightNode) {
      if (leftNode.val !== rightNode.val) {
        flag = false;
        return;
      }

      traverse(leftNode.left, rightNode.right);
      traverse(leftNode.right, rightNode.left);
    } else {
      flag = leftNode == rightNode;
    }
  }

  traverse(root.left, root.right);

  return flag;
};
