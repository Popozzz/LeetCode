/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if (s === "") return true;
    
    s = s.split('');
    var arr = []; // 接收出栈
    var l = s.length - 1;
    var j = 1;
    
    arr.push(s.pop());
    
    while(l > 0) {
        var k1 = s.pop();
        l --;
        var link = k1 + arr[j-1];
        if (link === '{}' || link === '()' || link === '[]' ) {
            arr.pop();
            j --;
        } else {
            arr.push(k1);
            j ++;
        }
    }
    
    if (j === 0) return true;
    
    return false;
};