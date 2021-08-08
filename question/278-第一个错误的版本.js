/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1,
      right = n,
      mid = ((left + right) / 2) >> 0;
    let result;

    while (left <= right) {
      const isBad = isBadVersion(mid);
      if (isBad) {
        right = mid - 1;
        result = mid;
      } else {
        left = mid + 1;
      }

      mid = ((left + right) / 2) >> 0;
    }

    return result;
  };
};
