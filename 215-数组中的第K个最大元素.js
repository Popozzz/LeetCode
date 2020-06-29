/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 快速排序
  function swap(arr, i, j) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
  }

  function qSort(arr, p, q) {
      let pivot = arr[q];
      let j = p;

      for (let i=p; i<=q; i++) {
          if (arr[i] < pivot) {
              swap(arr, i, j)
              j ++;
          }
      }

      swap(arr, j, q);
      
      let position = arr.length - j ;
      if (position === k) return arr[j];
      if (position > k) {
          return qSort(arr, j+1, q);
      } else {
          return qSort(arr, p, j-1);
      }
   }

  return qSort(nums, 0, nums.length - 1);
};