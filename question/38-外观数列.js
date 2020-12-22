/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let i = 2, j = 0; // i,j分别是计时器
  let letter = '1'; // 最开始的报数

  while(i <= n) { // 从2开始
    let result = '';
    let preStr = letter.charAt(0);
    let strCount = 0;

    while(j <= letter.length) { // 循环字符串
      let nowStr = letter.charAt(j);
      if (preStr === nowStr) {
        strCount ++;
      } else {
        result += strCount + preStr;
        preStr = nowStr;
        strCount = 1;
      }
      j++;
    }
    
    j = 0;
    i ++;
    letter = result;
  }

  return letter;
};