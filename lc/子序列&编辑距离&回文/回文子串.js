/**
 * 双指针
 * @param str
 * @description 判断有多少个回文子串，双指针ij作为中心点，对应的字符相同（str[i]=== str[j] => abba）则num + 1，以中心点向外移动，
 * @description 指针位置两种，i和i i+1，abba => [[a,ab], [b,bb], [b,ba], [a]]作为指针中心
 */
function solution(str = 'abba') {
    let res = 0
    for (let i = 0; i < str.length; i++) {
        res += getNum(i, i, str)
        res += getNum(i, i + 1, str)
    }

    function getNum(i, j, str) {
        let num = 0
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            i--
            j++
            num++
        }
        return num
    }
    return res
}

/**
 * dp
 */
function solution(s) {
    const dp = new Array(s.length).fill(0).map(e => new Array(s.length))
    let res = 0
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    dp[i][j] = true
                    res ++
                } else {
                    if (dp[i + 1][j - 1]) {
                        res ++
                        dp[i][j] = true
                    }
                }
            }
        }        
    }
    return res
}