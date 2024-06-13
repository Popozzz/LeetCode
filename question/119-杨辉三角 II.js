/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const rowNum = rowIndex + 1
  const result = new Array(rowNum)

  let i = 0;
  let j = result.length - 1
  let arr = new Array(rowNum).fill(1)
  while(i<=j) {
    result[i] = arr[j]
    result[j] = arr[j]
    arr = reduceSumArr(arr, j)
    i ++;
    j --;
  }

  return result
};

function reduceSumArr(arr, len) {
  let sum = 0
  const result = []
  for(let i=0; i<len; i++) {
    sum += arr[i]
    result.push(sum)
  }

  return result
}