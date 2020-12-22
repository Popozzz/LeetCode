/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var positive = x > 0;
    var str = x.toString();
    var arr = str.split('');
    var result = arr.reverse();
    result = Number(positive? result.join('') : '-' + result.join('').replace('-', ''));
    if (result >= 2147483647 || result <= -2147483648) return 0;
    
    return result;
};