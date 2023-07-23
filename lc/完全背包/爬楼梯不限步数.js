/**
 * @param m 步数上限
 * @param n 楼梯长度
 */
function bagClimb (m = 3, n = 10) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (i >= j) dp[i] = dp[i] + dp[i - j]
    }
  }
  return dp[n]
}
