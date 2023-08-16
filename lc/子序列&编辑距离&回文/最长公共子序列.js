/**
 * @name 最长重复子数组
 * @param {*} str1
 * @param {*} str2
 * @dp 一维数组 dp[i][j] 每轮循环比较str1[i] === num2[j]，相同则找上一个的值 + 1，不相同则取每个上一轮的max
 * @description dp:init:  [0, 0,  0,  0,  0]，非连续
 * @return max
 */
function findLength(str1 = 'ace', str2 = 'acd') {
    const dp = new Array(str1.length + 1).map(e => new Array(str2.length + 1).fill(0))
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1 // i j 起始为1，比较取str1[i - 1] 和 str2[j - 1]
            else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
        }
    }
    return dp[str1.length][str2.length]
}