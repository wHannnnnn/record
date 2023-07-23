/**
 * @param word1
 * @param word2
 * @description word1 转换成 word2 所使用的最少操作数 
 * @dp word1[i] !== word[j]有三种情况 min(增删换)，增加：dp[i][j - 1]，删除：dp[i - 1][j]，替换：dp[i - 1][j - 1]
*           a c d

*         0 1 2 3   ==> word1为空，word1 转换成 word2需要增加三次
*    a    1 0 1 2
*    c    2 1 0 1
*    e    3 2 1 1
          |
      word2为空，word1 转换成 word2需要删除三次
 */
function solution(word1 = 'ace', word2 = 'acd') {
    const dp = new Array(word1.length + 1).fill().map(() => new Array(word2.length + 1).fill(0))
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
            else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        }
    }
    return dp[word1.length][word2.length]
}