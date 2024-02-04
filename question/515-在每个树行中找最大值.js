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
var largestValues = function (root) {
  if (!root) return []

  let maxArr = []
  const travelTree = (node) => {
    const currentLevel = node.level || 0
    const currentMax = maxArr[currentLevel] == null ? node.val : maxArr[currentLevel]

    maxArr[currentLevel] = Math.max(currentMax, node.val)

    if (node.left) {
      node.left.level = currentLevel + 1
      travelTree(node.left)
    }

    if (node.right) {
      node.right.level = currentLevel + 1
      travelTree(node.right)
    }
  }

  travelTree(root)

  return maxArr
};