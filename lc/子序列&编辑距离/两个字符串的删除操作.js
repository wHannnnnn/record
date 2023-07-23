/**
 * @param str1
 * @param str2
 * @description 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 * @return 俩字符串总长度 - 最长公共子序列长度 
 */
function solution(str1 = 'sea', str2 = 'eat') {
    const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0))
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
            else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
        }
    }
    return str1.length + str2.length - (dp[str1.length][str2.length] * 2)
}