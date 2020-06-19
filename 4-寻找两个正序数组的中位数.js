/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var arr = [];
  var result = 0;
  var i = j = 0;
  
  while (i<nums1.length || j<nums2.length) {
      var a = nums1[i] == undefined? (nums2[j] + 1) : nums1[i];
      var b = nums2[j] == undefined? (nums1[i] + 1) : nums2[j];
      if (a > b) {
          arr.push(b)
          j++;
      } else {
          arr.push(a)
          i++;
      }  
  }

  var count = i + j;
  if (count % 2 === 0) {
      var position = count / 2;
      result = (arr[position-1] + arr[position])/2;
      
  } else {
      var position = (count / 2) ^ 0;
      result = arr[position];
  }
  
  return result;
};