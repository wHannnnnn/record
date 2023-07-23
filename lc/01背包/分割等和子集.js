/**
 * @name 分割等和子集
 * @param {*} nums [1, 5, 11, 5] => [1, 5, 5] && [11] 
 * @dp dp[j] sum / 2 = 11 作为背包上限
 * @console (12) [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            (12) [0, 1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 6]
            (12) [0, 1, 1, 1, 1, 5, 6, 6, 6, 6, 6, 11]
            (12) [0, 1, 1, 1, 1, 5, 6, 6, 6, 6, 10, 11]
 * @description 背包上限为11的可放最大值 === 11
 * @reutrn boolean
 */
function bag01Split(nums = [1, 5, 11, 5]) {
    const sum = nums.reduce((p, c) => p + c)
    if (sum % 2 !== 0) return false
    const size = sum / 2
    const dp = new Array(size + 1).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = size; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
        }
    }
    return dp[size] === size
}