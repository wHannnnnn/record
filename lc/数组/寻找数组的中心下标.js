/**
 * 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
 * @param {*} nums 
 * @returns 
 */
function solution(nums = [1, 7, 3, 6, 5, 6]) {
    const sum = nums.reduce((prev, cur) => prev + cur)
    let left = 0,
        right = 0
    for (let i = 0; i < nums.length; i++) {
        right = sum - left - nums[i]
        if (left === right) return i
        left += nums[i]
    }
    return -1
}