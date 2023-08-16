/**
 * @name 最长子序列
 * @param {*} s
 * @param {*} t
 * @dp s[i] === t[j] 时，dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
 * @dp s=babgbag t=bag，末尾相同选择匹配和不匹配t[j]（匹不匹配都是匹配i之前的字符串也就是dp[i - 1]），不匹配去掉最后，就是s=babgba t=ba对应的值，匹配去掉s后保留t最后，就是s=babgba t=bag对应的值
 * @dp else 最后一个字符没有匹配到则匹配s[i - 1]的字符串
 * @description 在 s 的子序列中 t 出现的个数，输入：s = "rabbbit", t = "rabbit" 输出：3
 * @init 字符串的每个字符都训需要循环，因为有i - 1和j - 1，所以i = s.length+ 1，j = t.length - 1。dp[i][j]二维数组，t为空j=1空字符串匹配后是1，[i][0]初始化为1，s为空s=0匹配一定是0，[0][j]初始化为0
 * @return dp[s.length][t.length]
 */
function solution(s = "rabbbit", t = "rabbit") {
    const dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))
    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            else dp[i][j] = dp[i - 1][j]
        }
    }
    return dp[s.length][t.length]
}