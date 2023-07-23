/**
 * @name 买卖股票的最佳时机IV
 * @param {*} prices 股票金额
 * @param {*} N 可以购买几次
 * @dp dp[i][j + 1] 持有（之前买入，当前买入（上一次卖出 - 当前价格））
 * @dp dp[i][j + 2] 不持有（之前卖出，当前卖出（之前持有 + 当前价格））
 * @description 共有 2N 次处理 
 * @return dp[i][1]
 */
function agiotage(prices = [1, 5, 3, 6, 4, 9], N = 3) {
    const dp = new Array(prices.length).fill(0).map(e => new Array(2 * N + 1).fill(0))
    for (let j = 1; j < 2 * N; j += 2) {
        dp[0][j] = -prices[0]
    }
    // 初始化完成 [0, -1, 0, -1, 0, -1, 0]
    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < 2 * N; j += 2) {
            dp[i][j + 1] = Math.max(dp[[i - 1][j + 1]], dp[i - 1][j] - prices[i]) /* 持有 */
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]) /* 不持有 */
        }
    }
}