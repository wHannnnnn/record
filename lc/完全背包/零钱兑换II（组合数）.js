/**
 * @name 零钱兑换II（组合数）
 * @param {*} coins 重量 面额
 * @param {*} amount 背包重量上限
 * @dp 一维数组 dp[j] = 组合数  j = 上限
 * @description dp:init:  [0, 0,  0,  0,  0]，组合不考虑顺序
 * @description 路径组合问题，当前上限有两种情况 加或者不加，分别获取对应上限的值，总数是两种之和
 * @return dp[amount]
 */
function bagCoins(coins = [1, 2, 5], amount = 5) {
    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1 // 作为推导，避免都为0
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < amount + 1; j++) {
            dp[j] = dp[j] + dp[j - coins[i]]
        }
    }
    return dp[amount]
}