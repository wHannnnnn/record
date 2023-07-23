/**
 * 
 * @param {*} nums 数组中没有重复元素
 * @description 排列不能重复，每个元素使用一次
 * @returns 
 */
function solution(nums = [1, 2, 3]) {
    const res = []
    const backTracking = (temp) => {
        if (temp.size === nums.length) {
            res.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (temp.has(nums[i])) continue
            temp.add(nums[i])
            backTracking(temp)
            temp.delete(nums[i])
        }
    }
    backTracking(new Set())
    return res
}