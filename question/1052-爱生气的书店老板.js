var maxSatisfied = function(customers, grumpy, minutes) {
  let total = 0;
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      total += customers[i];
    }
  }
  let maxIncrease = 0
  let maxSatisfiedCustomers = 0
  let left = 0;
  let right = 0;
  while(right < n) {
    maxIncrease += grumpy[right] * customers[right]
    if ((right - left + 1) >= minutes) {
      maxSatisfiedCustomers = Math.max(maxSatisfiedCustomers, maxIncrease + total)
      // 取值减去最左边，向右滑动窗口
      maxIncrease -= grumpy[left] * customers[left]
      left ++;
    }

    right ++
  }
  return maxSatisfiedCustomers
};