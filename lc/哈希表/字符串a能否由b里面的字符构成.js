// 输入: a = "aa", b = "aab"
// 输出：true
function solution(a, b) {
    const bMap = new Map()
    for (const i of b) {
        bMap.set(i, (bMap.get(i) || 0) + 1)
    }
    for (const j of a) {
        let val = bMap.get(j)
        if (!val) return false
        else bMap.set(j, --val)
    }
    return true
}