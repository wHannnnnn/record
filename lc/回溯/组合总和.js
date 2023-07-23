/**
 * 
 * @param {number[]} candidates 无重复元素的数组 
 * @param {number} target 
 * @description 不限制个数 允许重复 按总和剪枝
 * @returns 
 */
function solution(candidates = [1, 2, 3, 4], target = 7) {
    candidates.sort((a, b) => a - b)
    const res = []
    const backTracking = (start, sum, temp) => {
        if (sum >= target) {
            res.push(temp)
            return
        }
        for (let i = start; i < candidates.length && candidates[i] + sum <= target; i++) {
            temp.push(candidates[i])
            sum += candidates[i]
            backTracking(i, sum, temp)
            sum -= candidates[i]
            temp.pop()
        }
    }
    backTracking(0, 0, [])
    return res
}