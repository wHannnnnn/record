/**
 * 
 * @param {number[]} candidates 有重复元素，每个元素使用一次，组合不允许重复
 * @param {number} target 
 * @description 树的同层被使用过相同元素去重，跳过当前
 * @returns 
 */
function solution(candidates = [10, 1, 2, 7, 6, 1, 5], target = 8) {
    candidates.sort((a, b) => a - b)
    const res = []
    const backTracking = (start, sum, temp) => {
        if (sum >= target) {
            res.push([...temp])
            return
        }
        for (let i = start; i < candidates.length && candidates[i] + sum <= target; i++) {
            if (i !== start && candidates[i] === candidates[i - 1]) continue
            temp.push(candidates[i])
            sum += candidates[i]
            backTracking(i + 1, sum, temp)
            temp.pop()
            sum -= candidates[i]
        }
    }
    backTracking(0, 0, [])
    return res
}