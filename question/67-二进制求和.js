/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var arr = a.split('');
    var brr = b.split('');
    
    var i = arr.length - 1;
    var j = brr.length - 1;
    var add = 0;
    var result = '';
    
    while (i>=0 || j>=0 || add > 0) {
        let t1 = Number(arr[i] || 0);
        let t2 = Number(brr[j] || 0);
        let sum = t1 + t2 + add;
        
        if (sum >= 2) {
            sum -= 2;
            add = 1;
        } else {
            result = result
            add = 0;
        }
        
        result = sum + result;
        i--;
        j--;
    }
    
     return result;
};