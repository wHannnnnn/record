/**
 * 
 * @param {number[]} nums 不含重复元素的整数数组
 * @description 返回该数组所有可能的子集，不重复
 * @returns 
 */
function solution(nums = [1, 2, 3]) {
    const res = []
    const backTracking = (start, temp) => {
        res.push([...temp])
        for (let i = start; i < nums.length; i++) {
            temp.push(nums[i])
            backTracking(i + 1, temp)
            temp.pop()
        }
    }
    backTracking(0, [])
    return res
}