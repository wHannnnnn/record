/**
 * @name 最大子序和
 * @param {*} nums
 * @description count相加小于0不作为下轮计算，重置为0，负数 + nums[i] 一定< nums[i]
 * @return res
 */
function maxSum(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
    let max = -Infinity // 如果是0，count > max 可能不进入
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
        if (count > max) max = count
        if (count < 0) count = 0
    }
    return max
}

/**
 * @name 最大子序和(dp)
 * @param {*} nums
 * @dp dp[i]    max(dp[i - 1] + nums[i], nums[i])
 * @return res
 */
function maxSum(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
    const dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i] /* 加当前值之前的最大 + 当前值 */ , nums[i] /* 当前值 */ ) // 前面的+当前值没有当前值大，dp对应就是当前值
        max = Math.max(max, dp[i])
    }
    return max
}