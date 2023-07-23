/**
 * @name 接雨水
 * @param nums
 */
function solution(nums = [60, 20, 20, 10, 40]) {
    let sum = 0
    const stack = []
    stack[0] = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[stack[stack.length - 1]] === nums[i]) {
            stack.pop()
        } else {
            while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
                const last = stack.pop()
                    // pop之后stack可能为空
                if (stack.length) {
                    const h = Math.min(nums[i], nums[stack[stack.length - 1]]) - nums[last]
                    const w = i - stack[stack.length - 1] - 1
                    sum += w * h
                }
            }
        }
        stack.push(i)
    }
    return sum
}