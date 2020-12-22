/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    
    var i = 0;
    var str = x.toString();
    
    while (x !== 0) {
        if (str[i] != x%10) {
            return false;
        }
        x = (x - x %10)/10;
        i ++;
    }
    return true;
};