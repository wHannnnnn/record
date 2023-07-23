/**
 * @name 零钱兑换（最少硬币个数）
 * @param {*} coins 重量 面额
 * @param {*} amount 背包上限 总金额
 * @dp 一维数组 dp[j] = 硬币个数  j = 上限  
 * @description dp:init:  [0, Infinity...]，加和不加取最小值，加当前值的话硬币个数+1
 * @return dp[amount]
 */
function bagCoins(coins = [1, 2, 5], amount = 11) {
    const dp = new Array(amount + 1).fill(0).map(() => Infinity)
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < amount + 1; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }
    if (dp[amount] === Infinity) return -1
    return dp[amount]
}