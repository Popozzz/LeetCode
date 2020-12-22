/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if (!needle) return 0;
    
    var hrr = haystack.split("");
    var nrr = needle.split("");
    
    var len = hrr.length;
    var k = nrr.length;
    var i = 0, j = 0, result = -1;
    
    for (i=0; i<len; i++) {
        if (hrr[i] === nrr[j]) {
            j ++;
            k --;
            result = i;
        } else if(k > 0 && j > 0) {
            i -= j;
            j = 0;
            k = nrr.length;
        }
        
        if (k === 0) break;
    }
    
    if (k === 0) return result - nrr.length + 1;
    
    return -1;
};