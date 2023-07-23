/**
 * @name 石头相撞后最小重量
 * @param {*} nums [2, 7, 4, 1, 8, 1]
 * @description 以(sum / 2)分成两组值相近的数组相减 [num1, sum - num1]
 * @console (12) [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            (12) [0, 0, 2, 2, 2, 2, 2, 7, 7, 9, 9, 9]
            (12) [0, 0, 2, 2, 4, 4, 6, 7, 7, 9, 9, 11]
            (12) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            (12) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            (12) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 * @reutrn (sum - num1) - num1
 */
function bag01Stones(nums = [2, 7, 4, 1, 8, 1]) {
    const sum = nums.reduce((p, c) => p + c)
    const size = Math.floor(sum / 2)
    const dp = new Array(size + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = size; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    return (sum - dp[size]) - dp[size]
}