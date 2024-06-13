/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let travelTree = (node) => {
    if (!node || node == p || node == q) {
      return node
    }
    let left = travelTree(node.left)
    let right = travelTree(node.right)
    if (left && right) return node
    if (!left) return right
    return left
  }
  return travelTree(root)
}
