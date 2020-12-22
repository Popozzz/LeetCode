/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var result = 0;
    while(n > 0) {
        var position = n & 1;
        if (position === 1) {
            result ++;
        }
        n = (n / 2) ^ 0;
    }

    return result;
};