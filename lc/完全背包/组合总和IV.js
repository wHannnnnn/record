/**
 * @name 组合总数
 * @param {*} nums 数值
 * @param {*} target 和
 * @dp 一维数组 dp[i] = 组合总数  i = 上限
 * @description dp:init:  [1, 0, 0, 0, 0]，排列需要考虑顺序，顺序不同视为不同的组合
 * @description 路径排列问题，当前上限有两种情况 加或者不加，分别获取对应上限的值，总数是两种之和
 * @description 每轮循环上限确定，数值循环，对应上限值就是不加当前值 和 加当前值 的和
 * @return dp[target]
 */
function bagSum(nums = [1, 2, 3], target = 4) {
    const dp = new Array(target + 1).fill(0)
    dp[0] = 1 // 作为计算
    for (let i = 0; i < target + 1; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) dp[i] = dp[i] + dp[i - nums[j]]
        }
    }
    return dp[target]
}