/**
 * @name 单词拆分
 * @param {*} s 字符串
 * @param {*} wordDict 单词表
 * @dp dp[0] = true
 * @description 单词可以重复使用，但是组合后的顺序要和字符串一致
 * @description wordDict作为物品，s.length是上限
 * @return dp[s.length]
 */
function wordSplit(s = 'applepenapple', wordDict = ["apple", "pen"] /* =["apple", "pen", "apple"] */ ) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 0; i < s.length + 1; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (i >= wordDict[j].length) {
                const str = s.slice(i - wordDict[j].length, i)
                if (str === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
}