var zjcf = function(n) {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1
    dp[3] = 2
    for (let i = 4; i <= n; i++) {
        for (let j = 1; j <= 3; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n]
}