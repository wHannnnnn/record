/**
 * @name 买卖股票的最佳时机
 * @param {*} prices 股票金额
 * @param {*} fee 手续费
 * @dp dp[i][0]当前持有（持有可以是当前买入和之前买入），dp[i][1]当前不持有（不持有可以是当前卖出和之前卖出）
 * @return max(dp[i][0], dp[i][1])
 */
function agiotage(prices = [1, 3, 2, 8, 4, 9], fee = 2) {
    const dp = []
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = [Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]), Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)]
    }
    return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1])
}