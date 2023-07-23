/**
 * @param {number} n
 * @param { number } k
 * @description 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 */
function solution(n, k) {
    const res = []

    const backTracking = (start, temp) => {
        if (temp.length >= k) {
            res.push([...temp] /* 引用类型temp修改会影响res */ )
            return
        }
        // 剩余元素：n - i
        // 剩余总数 = 剩余元素 + 本身：n - i + 1
        // 所需要元素个数：k - temp.length
        // 剩余总数 >= 所需要元素个数：n - i + 1 >= k - temp.length
        // n + 1 >= k - temp.length + i  =>   i <= n + 1 - (k - temp.length)
        for (let i = start; i <= n + 1 - (k - temp.length); i++) {
            temp.push(i)
            backTracking(i + 1, temp)
            temp.pop()
        }
    }
    backTracking(1, [])
    return res
}