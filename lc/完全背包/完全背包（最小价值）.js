/**
 * @name 完全背包（最大价值）
 * @param {*} weight 重量
 * @param {*} value 价值
 * @param {*} size 背包重量上限
 * @dp 一维数组 dp[j] = 总价值  j = 上限
 * @description dp:init:  [0, 0,  0,  0,  0]
 * @return dp[size]
 */
function bagComplate(weight = [1, 3, 4], value = [15, 40, 60], size = 4) {
    const dp = new Array(size + 1).fill(0).map(() => Infinity)
    dp[0] = 0
    for (let i = 0; i < weight.length; i++) { // 物品
        for (let j = weight[i]; j < size + 1; j++) { // 背包
            dp[j] = Math.min(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    if (dp[size] === Infinity) return -1
    return dp[size]
}