/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 * 递归版本，容易溢出
 */
var recoverFromPreorder = function(S) {
  var arr = S.split('');
  var root = new TreeNode(arr[0]);
  var i = 1;
  
  function getNode(node, deep, position) {
    if (arr.length === 0 || arr[i] == null) {
      return null
    }
    
    var d = 0;

    while(arr[i] === '-') {
      i ++;
      d ++;
    }
    
    var str = '0';
    while(arr[i] !== '-' && arr[i] != null) {
      str = str + arr[i];
      i++;
    }
    
    if (d>deep && position ==='left') {
      node.left = new TreeNode(Number(str));   
      getTree(node.left, d);
    } else if (d === (deep + 1) && position === 'right') {
      node.right = new TreeNode(Number(str));
      getTree(node.right, d);
    } else if (position === 'right'){
      node.right = null;
    }
    
    if (node.left == null && position === 'left' || node.right == null && position === 'right') {
      i = i - d - str.length + 1;
    }
  }
  
  function getTree(node, deep) {
    getNode(node, deep, 'left')
    getNode(node, deep, 'right');
  }

  getTree(root, 0);

  return root;
};

/**
 * @param {string} S
 * @return {TreeNode}
 * 非递归版本
 */
var recoverFromPreorder = function(S) {
  var arr = S.split('');    
  var str = '0';
  var deep = 0;
  var preDeep = -1;

  var root = {};
  var nodeObj = {};
  var node = root;
  
  arr.push('-');
  for (var i = 0;i<arr.length; i++) {
    if (arr[i] === '-') {
      if (str !== '0') {
        if (deep > preDeep) {
          if (deep === 0) {
            root = new TreeNode(Number(str));
            node = root;
          } else {
            node.left = new TreeNode(Number(str));
            node = node.left;
          }
        } else {
          node = nodeObj[deep-1];
          node.right = new TreeNode(Number(str));
          node = node.right;
        }
          
        nodeObj[deep] = node;
        preDeep = deep;
        str = '0';
        deep = 0;
      }
      deep ++;
    } else {
      str = str + arr[i];
    }
  }
  
  return root;
};