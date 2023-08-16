function solution(str = 'abba') {
    let max = 0
    let l = 0
    for (let i = 0; i < str.length; i++) {
        getNum(i, i, str)
        getNum(i, i + 1, str)
    }

    function getNum(i, j, str) {
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            if (max < j - i + 1) {
                l = i // i是最左侧
                max = j - i + 1
            }
            i-- // i--，往左移动
            j++
        }
    }
    return str.substring(l, max + 1)
}

function solution(s) {
    const dp = new Array(s.length).fill(0).map(e => new Array(s.length))
    let length = 0,
        l = 0
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    dp[i][j] = true
                    if (length < j - i + 1) {
                        l = i
                        length = Math.max(length, j - i + 1)
                    }
                } else {
                    if (dp[i + 1][j - 1]) {
                        dp[i][j] = true
                        if (length < j - i + 1) {
                            l = i
                            length = Math.max(length, j - i + 1)
                        }
                    }
                }
            }
        }
    }
    return s.substr(l, length)
}