/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const list = []
  const result = []
  let currentNode = root

  while (currentNode) {
    const { children, val } = currentNode
    result.push(val)

    if (children.length > 0) {
      currentNode.children = []
      list.unshift(...children)
    }

    currentNode = list.shift()
  }

  return result
}
