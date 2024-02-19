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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let list = [root]
  let deep = 1
  const result = []
  while (list.length) {
    const nextList = []
    list.forEach((node) => {
      const { left, right } = node
      ;[left, right].filter(Boolean).forEach((child) => {
        const { val } = child
        if (x === val || y === val) {
          result.push({
            parent: node,
            deep,
          })
        }

        nextList.push(child)
      })
    })

    if (result.length >= 1) {
      break
    }
    deep++

    list = nextList
  }

  const [left, right] = result

  return (
    result.length >= 2 &&
    left.deep === right.deep &&
    left.parent !== right.parent
  )
}
