/**
 * 
 * @param {number[]} nums 
 * @param {number} val 
 * @description 快慢指针，快指针查找匹配，是移除元素跳过，不是移除元素则赋值给慢指针对应位置，指针++，慢指针前面的都是不需要移除的元素
 * @returns 
 */
function solution(nums = [0, 1, 2, 3, 3, 0, 4, 2], val = 3) {
    let fastIndex = 0,
        slowIndex = 0
    while (fastIndex < nums.length) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex] = nums[fastIndex]
            slowIndex++
        }
        fastIndex++
    }
    return slowIndex
}