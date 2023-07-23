/**
 * @param {number[]} nums 
 * @description 子序列的长度至少是2，不允许重复 set做重复判断
 * @returns 
 */
function solution(nums = [4, 6, 7, 7]) {
    const res = []
    const backTracking = (start, temp) => {
        if (temp.length >= 2) res.push([...temp])
        const set_arr = new Set()
        for (let i = start; i < nums.length; i++) {
            if (set_arr.has(nums[i]) || nums[i] < temp[temp.length - 1]) continue
            temp.push(nums[i])
            set_arr.add(nums[i])
            backTracking(i + 1, temp)
            temp.pop()
        }
    }
    backTracking(0, [])
    return res
}