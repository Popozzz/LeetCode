/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const list = []
  const result = []
  let currentNode = root

  while (currentNode) {
    const { children, val } = currentNode
    if (children.length > 0) {
      list.push(currentNode)
      currentNode = children[0]
    } else {
      result.push(val)
      currentNode = list.pop()

      if (currentNode) {
        currentNode.children.shift()
      }
    }
  }

  return result
}
