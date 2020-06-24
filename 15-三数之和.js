/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  var positive = [];
  var negative = [];
  var positiveObj = {};
  var negativeObj = {};
  
  for (var i=0; i<nums.length; i++) {
    if (nums[i]>=0) {
      if (positiveObj[nums[i]] == null) {
        positive.push(nums[i]);
        positiveObj[nums[i]] = 1;
      } else {
        positiveObj[nums[i]] ++;
      }
        
    } else {
      if (negativeObj[nums[i]] == null) {
        negative.push(nums[i]);
        negativeObj[nums[i]] = 1;
      } else {
        negativeObj[nums[i]] ++;
      }
    }
  }

  for(var i=0; i<positive.length; i++) {
    var a = positive[i];
    for(var j=i+1; j<positive.length; j++) {
      var b = positive[j];
      var c = -a-b;
      
      if (negativeObj[c] != null) {
        result.push([a, b, c]);
      }
    }
    
    if (positiveObj[a]>1 && negativeObj[-a-a]) {
      result.push([a, a, -a-a]);
    }
  }
  
  for(var i=0; i<negative.length; i++) {
    var a = negative[i];
    
    for(var j=i+1; j<negative.length; j++) {  
      var b = negative[j];
      var c = -a-b;

      if (positiveObj[c] != null) {
        result.push([a, b, c]);
      }
    }
    
    if (negativeObj[a] > 1 && positiveObj[-a-a]) {
      result.push([a, a, -a-a]);
    }
  }
  
  if (positiveObj[0]>=3) {
    result.push([0,0,0]);
  }
  
  return result;
};