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
  let travelTree = (root) => {
    if (!root || root == p || root == q) {
      return root
    }
    let left = travelTree(root.left)
    let right = travelTree(root.right)
    if (left && right) return root
    if (!left) return right
    return left
  }
  return travelTree(root, p, q)
}
