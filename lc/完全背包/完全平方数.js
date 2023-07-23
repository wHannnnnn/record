/**
 * @name 完全平方数（最少组合数）
 * @param {*} num 组合相加值
 * @dp 一维数组 dp[j] = 总价值  j = 上限
 * @description 求最小组合数，dp:init: [0, Infinity]
 * @description 背包上限是num，物品是1，4，9，16...，加和不加取最小值，加当前值的话组合数+1
 * @return dp[num]
 */
function bagSquare(num = 12) {
    const dp = new Array(num + 1).fill(0).map(() => Infinity)
    dp[0] = 0
    for (let i = 1; i * i < num + 1; i++) { // 物品
        let val = i * i
            // j(num) >= val
        for (let j = val; j < num + 1; j++) { // 背包
            dp[j] = Math.min(dp[j], dp[j - val] + 1)
        }
    }
    return dp[num]
}