/**
 * @name 柱状图中最大的矩形
 * @param nums
 * @description 求基准值的左边第一个和右边第一个比它小的范围作为宽度，值为高度，范围内的面积循环求max
 */
function solution(nums = [2, 1, 5, 6, 2, 3]) {
    let max = 0
    let stack = []
    stack[0] = 0
    const list = [0, ...nums, 0]
    for (let i = 1; i < list.length; i++) {
        while (stack.length && list[i] < list[stack[stack.length - 1]]) {
            const last = stack.pop()
            const w = i - stack[stack.length - 1] - 1
            const h = list[last]
            max = Math.max(max, w * h)
        }
        stack.push(i)
    }
    return max
}