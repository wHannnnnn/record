/**
 * @name 买卖股票的最佳时机
 * @param {*} prices 股票金额
 * @dp dp[i][0]持有 dp[i][1]不持有 dp[i][2]冷冻期
 * @description 股票卖出后进入冷冻期，冷冻期前一天前一天卖出，股票持有可以是之前持有和当前持有，当前持有分为前一天不持有和前一天是冷冻期，不持有分为前一天不持有和冷冻期
 * @return Math.max(dp[i][1], dp[i][2], dp[i][3])  最后一天如果是冷冻期也可能是最大值
 */
function agiotage(prices = [1, 5, 3, 4, 6, 2]) {
    const dp = []
    dp[0] = [-prices[0], 0, 0, 0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]),
            Math.max(dp[i - 1][1], dp[i - 1][3]) /* 当前不持有   前一天不持有和冷冻期 */ ,
            dp[i - 1][0] + prices[i], /* 当天卖出 */
            dp[i - 1][2] /* 冷冻期 = 前一天卖出 */
        ]
    }
    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2], dp[prices.length - 1][3])
}