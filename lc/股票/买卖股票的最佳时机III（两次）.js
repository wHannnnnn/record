/**
 * @name 买卖股票的最佳时机III
 * @param {*} prices 股票金额
 * @dp dp[i][1] 第一次持有（之前买入，当前买入（0 - 当前价格））
 * @dp dp[i][2] 第一次不持有（之前卖出，当前卖出（第一次持有 + 当前价格）） 
 * @dp dp[i][3] 第二次持有（之前买入，当前买入（第一次卖出 - 当前价格））
 * @dp dp[i][4] 第二次不持有（之前卖出，当前卖出（第二次持有 + 当前价格））
 * @return dp[i][1]
 */
function agiotage(prices = [1, 5, 3, 6, 4]) {
    const dp = []
        // 买入后金额为 -prices[i]
        // 不持有默认金额 0
    dp[0] = [0, -prices[0], 0, -prices[0], 0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = [
            dp[i - 1][0],
            Math.max(dp[i - 1][1] /* 之前就持有 */ , 0 - prices[i] /* 现在持有 */ ),
            Math.max(dp[i - 1][2] /* 之前不持有 */ , dp[i - 1][1] + prices[i] /* 刚卖出 */ ),
            Math.max(dp[i - 1][3] /* 之前就持有 */ , dp[i - 1][2] - prices[i] /* 现在持有 */ ),
            Math.max(dp[i - 1][4] /* 之前不持有 */ , dp[i - 1][3] + prices[i] /* 刚卖出 */ ),
        ]
    }
    return dp[prices.length - 1][4]
}