/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var i = 1,
    len = prices.length,
    profit = 0;
  var minBuy = prices[0];

  while (i < len) {
    const current = prices[i];
    const minus = current - minBuy;

    profit = Math.max(profit, minus);
    minBuy = Math.min(minBuy || 0, current);
    i++;
  }

  return profit;
};
