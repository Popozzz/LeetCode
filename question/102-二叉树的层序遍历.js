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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let list = root ? [root] : []
  const result = []
  while (list.length) {
    const nextList = []
    const levelNodeList = []

    list.forEach((node) => {
      const { left, right, val } = node
      levelNodeList.push(val)
      if (left) {
        nextList.push(left)
      }

      if (right) {
        nextList.push(right)
      }
    })

    result.push(levelNodeList)

    list = nextList
  }

  return result
}
