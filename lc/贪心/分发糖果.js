/**
 * @param nums [1, 0, 2]
 * @description 正序循环右比左大，倒序循环左比右大，基础+1
 */
function solution(nums = [1, 0, 2]) {
    const init = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) init[i] = init[i - 1] + 1
    }
    for (let j = nums.length - 1 - 1; j >= 0; j--) {
        if (nums[j] > nums[j + 1]) init[j] = Math.max(init[j], init[j + 1] + 1)
    }
    return init.reduce((pre, cur) => pre += cur)
}