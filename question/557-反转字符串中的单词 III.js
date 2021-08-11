/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function reverse(word) {
    let str = "";

    word.forEach((w) => {
      str = w + str;
    });
    return str;
  }

  var arr = [],
    tempStr = [],
    result = "";
  var i = 0,
    len = s.length;
  while (i <= len) {
    const current = s[i] || " ";

    if (current === " ") {
      arr.push(tempStr);
      tempStr = [];
    } else {
      tempStr.push(current);
    }
    i++;
  }

  i = 0;
  len = arr.length;
  while (i < len) {
    if (i > 0) {
      result = result + " " + reverse(arr[i]);
    } else {
      result = result + reverse(arr[i]);
    }

    i++;
  }

  return result;
};
