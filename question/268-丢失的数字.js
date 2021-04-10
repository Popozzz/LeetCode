/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    var arr = [];
    var i = 0;

    while (i < nums.length) {
        let current = nums[i];
        arr[current] = true;

        i ++;
    }

    i = 0;
    while (i < arr.length) {
        if (arr[i] == undefined) {
            return i
        }

        i ++;
    }

  return nums.length;
};