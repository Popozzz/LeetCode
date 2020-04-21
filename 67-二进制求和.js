/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var arr = a.split("");
    var brr = b.split("");
    var result = '';
    
    var l = arr.length;
    var k = brr.length;
    
    var i = 0;
    var full = 0;
    
    while(l || k || full) {
        var m = '';
        var n = '';
        if (l > 0) {
           m = arr.pop();
            l --;
        }
        
        if (k > 0) {
            n = brr.pop();
            k --;
        }
        
        var last = (m - 0) + (n - 0) + full;
        
        if (last >= 2) {
            full = 1;
            result = (last - 2) + result;
        } else {
            full = 0;
            result = last + result;
        }
    }
    
    return result;
};