/**
 * 快慢指针替换
 * @param {number} nums 
 * @returns 
 */
function solution(nums = [0, 1, 2, 0, 5, 6, 0, 8]) {
    let l = 0,
        r = 0
    while (r < nums.length) {
        if (nums[r] !== 0) {
            nums[l] = nums[r]
            l++
        }
        r++
    }
    for (let i = l; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
}