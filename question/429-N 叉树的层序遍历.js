/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let list = root ? [root] : []
  const result = []

  while (list.length) {
    const nextList = []
    const levelNodeList = []

    list.forEach((node) => {
      const { val, children } = node
      levelNodeList.push(val)
      nextList.push(...children)
    })

    result.push(levelNodeList)

    list = nextList
  }

  return result
}
