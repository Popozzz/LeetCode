/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
  const arr = sentence.split(' ')
  let priceList = []
  const positionList = []
  arr.forEach((str, index) => {
    const match = str.match(/^\$([0-9]+)$/)
    if (match) {
      priceList.push(match[1])
      positionList.push(index)
    }
  })

  priceList = priceList.map((item) => {
    const price = Number(item)
    const result = price - (price * discount) / 100

    return `$${result.toFixed(2)}`
  })

  positionList.forEach((position, index) => {
    arr[position] = priceList[index]
  })

  return arr.join(' ')
}
