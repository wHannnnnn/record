/**
 * @name 跳跃游戏
 * @param nums 
 * @description 判断能否走到最后一步。每一步获取最大覆盖范围 + 当前所在的位置 >= nums.length -1，等于最后一个则为true
 */
function solution(nums = [2, 3, 1, 1, 4]) {
    let length = 0
    for (let i = 0; i <= length; i++) {
        length = Math.max(length, nums[i] + i)
        if (length >= nums.length - 1) return true
    }
    return false
}