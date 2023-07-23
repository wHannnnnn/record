/**
 * @name 下一个更大元素II
 * @param nums1
 * @description 循环地搜索它的下一个更大的数。如果不存在，则输出 -1
 * @description length*2，%取余的方式确定循环的位置
 */
function solution(nums = [1, 3, 2]) {
    const res = new Array(nums.length).fill(-1)
    const stack = []
    stack[0] = 0
    for (let i = 1; i < nums.length * 2; i++) {
        while (stack.length && nums[i % nums.length] > nums[stack[stack.length - 1]]) {
            const last = stack.pop()
            res[last] = nums[i % nums.length]
        }
        if (i < nums.length) stack.push(i) // 重复循环不需要push
    }
    return res
}