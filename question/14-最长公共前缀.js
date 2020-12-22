/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  var i = 1, l;
  var pubStr = strs[0].split('');

  while (strs[i] != null) {
  	l = pubStr.length;
  	var strArr = strs[i].split('');
  	var pubStrClone = [];

  	for (var j = 0; j < l; j++) {
  		if (pubStr[j] === strArr[j]) {
  			pubStrClone.push(pubStr[j]);
  		} else {
  			break;
  		}
  	}

  	pubStr = pubStrClone;
  	i++;
  }

  return pubStr.join('');
};