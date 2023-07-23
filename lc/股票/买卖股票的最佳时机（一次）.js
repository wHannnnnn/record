/**
 * @name 买卖股票的最佳时机
 * @param {*} prices 股票金额
 * @dp dp[i][0]当前持有（持有可以是当前买入和之前买入），dp[i][1]当前不持有（不持有可以是当前卖出和之前卖出）
 * @description 只能买卖一次
 * @return dp[i][1]
 */
function agiotage(prices = [7, 1, 5, 3, 6, 4]) {
    const dp = []
        // 买入后金额为 -prices[i]
        // 不持有默认金额 0
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = [Math.max(dp[i - 1][0] /* 之前就持有 */ , -prices[i] /* 现在持有 */ ), Math.max(dp[i - 1][1] /* 之前不持有 */ , dp[i - 1][0] + prices[i] /* 刚卖出 */ )]
    }
    return dp[prices.length - 1][1]
}
// 最大差值
function shares(arr = [2, 3, 5, 1, 2, 7]) {
    var minNum = arr[0];
    var maxProfit = 0; // 最大差值
    for (let i = 1; i < arr.length; i++) {
        minNum = Math.min(minNum, arr[i])
        maxProfit = Math.max(maxProfit, arr[i] - minNum)
    }
    return maxProfit
}