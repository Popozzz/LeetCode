/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const length = accounts.length
  const emailMap = new Map()

  for (let i = 0; i < length; i++) {
    const [name, ...emails] = accounts[i]

    const targetAccounts = [
      ...new Set(
        emails
          .map((email) => emailMap.get(email))
          .filter((index) => index != null)
      ),
    ].sort()
    if (targetAccounts.length > 0) {
      const [targetAccountIndex, ...restAccountIndex] = targetAccounts

      restAccountIndex.push(i)
      accounts[targetAccountIndex] = restAccountIndex.reduce(
        (result, accountIndex) => {
          const [name, ...emails] = accounts[accountIndex]
          result.push(...emails)
          emails.forEach((email) => emailMap.set(email, targetAccountIndex))
          accounts[accountIndex] = null
          return result
        },
        accounts[targetAccountIndex]
      )
    } else {
      emails.forEach((email) => emailMap.set(email, i))
    }
  }

  return accounts
    .filter((account) => account != null)
    .map((account) => {
      const [name, ...emails] = account
      const newEmails = [...new Set(emails)].sort()
      return [name, ...newEmails]
    })
}
