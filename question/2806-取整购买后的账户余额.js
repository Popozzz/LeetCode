/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
  const rest = purchaseAmount % 10
  const maxRoundedAmount = purchaseAmount + 10 - rest
  const minRoundedAmount = purchaseAmount - rest

  if (rest >= 5) {
    return 100 - maxRoundedAmount
  } 

  return 100 - minRoundedAmount
};