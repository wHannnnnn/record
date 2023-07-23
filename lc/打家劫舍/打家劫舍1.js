/**
 * @name 打家劫舍
 * @param {*} nums 金额
 * @dp dp[0] = 0
 * @description 禁止连续
 * @return dp[nums.length]
 */
function fn(nums = [1, 2, 3, 1]) {
    const dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
}