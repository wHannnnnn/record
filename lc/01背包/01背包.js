/**
 * @name 01背包二维数组
 * @param {*} weight 重量
 * @param {*} value 价值
 * @param {*} size 背包重量上限
 * @dp 二维数组  dp[i][j]   i = 物品  j = 上限
 * @description  dp:init:  [0, 15, 15, 15, 15]
 *                        [0, 0,  0,  0,  0 ]
 *                        [0, 0,  0,  0,  0 ] 
 * 
 *              result:   [0, 15, 15, 15, 15]
 *                        [0, 15, 15, 20, 35]
 *                        [0, 15, 15, 20, 35]
 * @return dp[weight.length - 1][size]
 */
function bag01(weight = [1, 3, 4], value = [15, 20, 30], size = 4) {
    const w_len = weight.length
    const dp = new Array(w_len).fill(0).map(e => new Array(size + 1).fill(0))
    for (let j = weight[0]; j < size + 1; j++) {
        dp[0][j] = value[0]
    }
    for (let i = 1; i < weight.length; i++) {
        for (let j = 1; j < size + 1; j++) {
            if (weight[i] > j) dp[i][j] = dp[i - 1][j]
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
        }
    }
    return dp[w_len - 1][size]
}

/**
 * @name 01背包一维滚动数组
 * @param {*} weight 重量
 * @param {*} value 价值
 * @param {*} size 背包重量上限
 * @dp 一维数组 dp[j]  j = 上限
 * @description 倒叙循环，避免每轮循环重复添加物品 +1，1+1，2+1，3+1
 * @description dp:init:  [0, 0,  0,  0,  0 ]
 * 
 *              loop:     [0, 15, 15, 15, 15]
 *                                ||
 *                        [0, 15, 15, 20, 35]
 *                                ||
 *                        [0, 15, 15, 20, 35]
 * 
 *              result:   [0, 15, 15, 20, 35]
 */
function bag01One(weight = [1, 3, 4], value = [15, 20, 30], size = 4) {
    const dp = new Array(size + 1).fill(0)
    for (let i = 0; i < weight.length; i++) {
        for (let j = size; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    return dp[size]
}