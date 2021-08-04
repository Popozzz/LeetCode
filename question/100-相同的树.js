/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  var flag = true;

  function traverse(node1, node2) {
    if (!flag) return;

    if (node1 && node2) {
      if (node1.val !== node2.val) {
        flag = false;
      }

      traverse(node1.left, node2.left);
      traverse(node1.right, node2.right);
    } else {
      flag = node1 == node2;
    }
  }

  traverse(p, q);
  return flag === false ? false : true;
};
