function lj(m = 3, n = 4) {
    const dp = new Array(m).fill(1).map(() => new Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}

function ljzhangai(arrs = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
]) {
    const m = arrs.length
    const n = arrs[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        if (arrs[i][0] === 0) dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        if (arrs[0][j] === 0) dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = arrs[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}