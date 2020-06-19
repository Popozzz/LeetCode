/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var arr = s.split('');
  var j = arr.length - 1;
  
  for(var i=0; i<arr.length && i<j;) {
    var leftCode = arr[i].charCodeAt();
    var rightCode = arr[j].charCodeAt();
    var leftVail = (leftCode>= 65 && leftCode<=90) || (leftCode>= 48 && leftCode<=57);
    var rightVail = (rightCode>=65 && rightCode<=90) || (rightCode>=48 && rightCode<=57);
    
    if (leftCode>= 97 && leftCode<=122) {
      leftCode -= 32
      leftVail = true;
    }
    
    if (rightCode>= 97 && rightCode<=122) {
      rightCode -= 32
      rightVail = true;
    }
    
    if (leftVail && rightVail) {            
      if (rightCode !== leftCode ) {
        return false;
      }
      i ++;
      j --;
    }
    
    if (!leftVail) {
      i++;
    }
        
    if (!rightVail) {
      j--;
    }
  }
  
  return true;
};