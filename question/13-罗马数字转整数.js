/**
 * @param {string} s
 * @return {number}
 */
var roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    var str = s.split('');
    var l = str.length;
    var result = roman[str[l-1]];
    for (var i=l-2; i>=0; i--) {
        if (roman[str[i]] < roman[str[i+1]]) {
            result -= roman[str[i]];
        } else {
            result += roman[str[i]];
        }
    }
    
    return result;
};


// 另一种写法（更快）
/**
 * @param {string} s
 * @return {number}
 */
const MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var romanToInt2 = function(s) {
    let arr = s.split('')
    let i = 0;
    let sum = 0;
    let prev = '';
    while(i < arr.length) {
        const key = arr[i];
        sum = sum + MAP[key];
        switch(key) {
            case 'V':
            case 'X':
                if (prev === 'I') {
                    sum -= MAP['I'] * 2;
                }
                break;
            case 'L':
            case 'C':
                if (prev === 'X') {
                    sum -= MAP['X'] * 2
                }
                break;
            case 'D':
            case 'M':
                if (prev === 'C') {
                    sum -= MAP['C'] * 2
                }
                break;
            default: ;
        }

        prev = key;
        i ++;
    }

    return sum;
};