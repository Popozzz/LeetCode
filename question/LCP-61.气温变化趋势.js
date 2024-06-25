/**
 * @param {number[]} temperatureA
 * @param {number[]} temperatureB
 * @return {number}
 */
var temperatureTrend = function (temperatureA, temperatureB) {
  const trendAList = []
  const trendBList = []
  const days = temperatureA.length

  for (let i = 1; i < days; i++) {
    const diffA = temperatureA[i] - temperatureA[i - 1]
    const diffB = temperatureB[i] - temperatureB[i - 1]
    trendAList.push(diffA > 0 ? 1 : diffA < 0 ? -1 : 0)
    trendBList.push(diffB > 0 ? 1 : diffB < 0 ? -1 : 0)
  }

  let maxDay = 0
  let countDay = 0
  for (let i = 0; i < days - 1; i++) {
    const trendA = trendAList[i]
    const trendB = trendBList[i]

    if (trendA === trendB) {
      countDay++
    } else {
      maxDay = Math.max(countDay, maxDay)
      countDay = 0
    }
  }

  maxDay = Math.max(countDay, maxDay)
  return maxDay
}
