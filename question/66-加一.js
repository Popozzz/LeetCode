/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length - 1;
    var full = 1;
    
    while(full) {
        
        if (len >= 0) {
            var sum = full + digits[len];
            
            if (sum > 9) {
                digits[len] = 0;
                full = 1;
            } else {
                digits[len] = sum;
                full = 0;
            }
        } else {
            digits.unshift(1);
            full = 0;
        }
        
        len --;
    }
    
    return digits;
};