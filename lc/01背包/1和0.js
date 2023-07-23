/**
 * @name 1和0
 * @param {*} nums ["10", "0001", "111001", "1", "0"]   m = 5   n = 3
 * @description 返回最多 5个0 3个1 的最长数组个数
 * @description 以 m n 的组合 作为背包的上限dp[m][n]，求每个字符串的0和1的个数（x， y）作为m n 上限的边界
 * @description max(dp[i][j], dp[i - x][j - n] + 1)，在允许添加范围内选择加或不加的最大值
 * @reutrn dp[m][n]
 */
function bag01Max(strs = ['10', '0001', '111001', '1', '0'], m = 5, n = 3) {
    const dp = new Array(m + 1).fill(0).map(e => new Array(n + 1).fill(0))
    for (const str of strs) {
        let x = 0,
            y = 0
        for (const str_item of str) {
            if (str_item === '0') x += 1
            else y += 1
        }
        for (let i = m; i >= x; i--) {
            for (let j = n; j >= y; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1)
            }
        }
    }
    return dp[m][n]
}