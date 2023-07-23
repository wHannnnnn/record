/**
 * @name 目标和
 * @param {*} nums = [1, 1, 1, 1, 1]
 * @param {*} target = 3
 * @dp dp[j] 当前上限总路径数 = 加和不加当前值的总和  dp[j] + dp [j - nums[i]]
 * @console (5) [1, 1, 0, 0, 0]
            (5) [1, 2, 1, 0, 0]
            (5) [1, 3, 3, 1, 0]
            (5) [1, 4, 6, 4, 1]
            (5) [1, 5, 10, 10, 5]
 * @description 分为加法和减法两波（left right），以一种作为上限求得对应上限最多多少种，sum = 5
 * @description left - right = target   right = sum - left   left - (sum - left) = target  left = (target + sum) / 2
 * @reutrn dp[left]
 */
function bag01TargetSum(nums = [1, 1, 1, 1, 1], target = 3) {
    const sum = nums.reduce((p, c) => p + c)
    if (Math.abs(target > nums)) return 0
    if ((target + sum) % 2) return 0
    const left = (target + sum) / 2
    const dp = new Array(left + 1).fill(0)
        // 初始化为0 从后往前就都是0
        // 可以理解为路径，加当前值还是原路径数
        // 所以[0] = 1
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = left; j >= nums[i]; j--) {
            dp[j] = dp[j] + dp[j - nums[i]]
        }
    }
    return dp[left]
}