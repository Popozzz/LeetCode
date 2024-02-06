/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const length = flowerbed.length
  let spareFlowerbedLength = 0
  let i = 0
  let maxFlowerNum = 0
  while (i < length) {
    const isEmpty = flowerbed[i] === 0

    if (isEmpty) {
      spareFlowerbedLength++
    }

    if (spareFlowerbedLength > 0 && (!isEmpty || i === length - 1)) {
      const startIndex = i - spareFlowerbedLength - (isEmpty ? 0 : 1)
      const endIndex = isEmpty ? i + 1 : i

      let spareMaxFlower = 0
      // 奇数
      if ((spareFlowerbedLength & 1) > 0) {
        spareMaxFlower = (spareFlowerbedLength - 1) / 2

        if (startIndex < 0 && endIndex >= length) {
          spareMaxFlower++
        }
      } else {
        spareMaxFlower = spareFlowerbedLength / 2

        if (startIndex >= 0 && endIndex < length) {
          spareMaxFlower--
        }
      }
      maxFlowerNum += spareMaxFlower
      spareFlowerbedLength = 0
    }

    i++
  }
  return n <= maxFlowerNum
}
