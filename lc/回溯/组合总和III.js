/**
 * @name 组合总和III
 * @param {number} k 个数
 * @param {number} n 总和
 * @description 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 限制个数，不允许重复
 * @returns [][]
 */
function solution(k, n) {
    const res = []
    const backTracking = (start, sum, temp) => {
        if (temp.length >= k) {
            if (sum === n) res.push([...temp])
            return
        }
        // 9 最大数字
        // 9 - i + 1 >= k - temp.length
        for (let i = start; i <= 9 + 1 - (k - temp.length) && i + sum <= n; i++) {
            temp.push(i)
            sum += i
            backTracking(i + 1, sum, temp)
            temp.pop()
            sum -= i
        }
    }
    backTracking(1, 0, [])
    return res
}