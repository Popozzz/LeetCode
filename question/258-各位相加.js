/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  function add(n) {
    var total = (n + "").split("").reduce((sum, current) => {
      return (sum += Number(current));
    }, 0);

    if (total > 9) {
      return add(total);
    }

    return total;
  }

  return add(num);
};
