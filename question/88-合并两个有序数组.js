/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 思路： 倒着顺序合并
var merge = function (nums1, m, nums2, n) {
  var len = m + n,
    i = len - 1;
  m--;
  n--;

  while (n >= 0) {
    const current1 = nums1[m];
    const current2 = nums2[n];

    if (current1 > current2) {
      nums1[i] = current1;
      m--;
    } else {
      nums1[i] = current2;
      n--;
    }

    i--;
  }
};
