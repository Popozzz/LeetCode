/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jew = {}, count = 0, i;
    var jrr = J.split('');
    var srr = S.split('');
    var jl = jrr.length, sl = srr.length;
    
    for (i=0; i<jl; i++) {
        jew[jrr[i]] = true;
    }
    
    for (i=0; i<sl; i++) {
        if (jew[srr[i]]) {
            count ++;
        }
    }
    
    return count; 
};