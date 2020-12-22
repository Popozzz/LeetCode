/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var result = [];
  var nodeArr = [root];
  
  for(var i=0; i < nodeArr.length; i++) {
    var node = nodeArr[i];
    if (node != null) {
      result.push(node.val);
      nodeArr.push(node.left);
      nodeArr.push(node.right)
    } else {
      result.push(null);
    }
  }

  return JSON.stringify(result);
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  var arr = JSON.parse(data);
  
  function getNode(val) {
    if(val != null) {
      return new TreeNode(val);
    }
    return val;
  }
  
  var root = getNode(arr[0]);
  var nodeArr = [root];

  for (var i=0, j = 0; j < arr.length, i < nodeArr.length; i++) {
    var node = nodeArr[i];
    if (node != null) {
      j ++;
      node.left = getNode(arr[j]);
      nodeArr.push(node.left);
      
      j ++;
      node.right = getNode(arr[j]);
      nodeArr.push(node.right);
    }
  }
  
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/