/**
 * @name 判断子序列
 * @param {*} s
 * @param {*} t
 * @description 判断 s 是否为 t 的子序列 非连续 示例 1： 输入：s = "abc", t = "ahbgdc" 输出：true；示例 2： 输入：s = "axc", t = "ahbgdc" 输出：false
 * @return res
 */
function solution(s = 'abc', t = 'ahbgdc') {
    let len_s = s.length,
        len_t = t.length
    let i = 0,
        j = 0
    while (i < len_s && j < len_t) {
        if (s[i] === t[j]) i++
            j++
    }
    return i === len_s
}

function dp_solution(s = 'abc', t = 'ahbgdc') {
    const dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
            else dp[i][j] = dp[i][j - 1]
        }
    }
    return dp[s.length][t.length] === s.length
}