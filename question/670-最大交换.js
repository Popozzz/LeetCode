/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const numList = String(num).split('').map(Number)
  const length = numList.length
  for (let i=0; i<length; i++) {
      let max = numList[i]
      let maxPosition = i
      for(let j=length-1; j>i; j--) {
          if (numList[j] > max) {
              max = numList[j]
              maxPosition = j
          }
      }

      if (maxPosition !== i) {
          numList[maxPosition] = numList[i]
          numList[i] = max
          break;
      }
  }

  return Number(numList.join(''))
};