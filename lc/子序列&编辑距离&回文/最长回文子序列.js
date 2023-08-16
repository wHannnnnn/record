/**
 * @param str
 * @dp dp[i][j] 如果str[i] === str[j]，获取两个字符之前的dp对应的值 + 2，dp[i][j] = dp[i + 1][j - 1] + 2；如果str[i] !== str[j]，则分别删除ij节点取最大值
 * @dp 从 i--->j 的范围，j 依赖 i，先确定i才能确定j。i依赖i+1，倒序。j依赖j-1，正序
 * @init 如果i=j，说明指向同一个元素，一个元素则默认值=1，其他情况默认值为0
 * @description 非连续
 */
function solution(str = 'bbbab') {
    const dp = new Array(str.length).fill(0).map(() => new Array(str.length).fill(0))
    for (let i = 0; i < str.length; i++) {
        dp[i][i] = 1
    }
    for (let i = str.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) dp[i][j] = dp[i + 1][j - 1] + 2
            else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
        }
    }
    return dp[0][str.length - 1]
}