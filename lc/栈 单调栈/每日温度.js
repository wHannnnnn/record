/**
 * @param {Array<number>} temperatures
 */
function solution(temperatures = [73, 74, 75, 71, 69, 72, 76, 73]) {
    const res = new Array(temperatures.length).fill(0)
    const stack = []
    stack[0] = 0
    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const last = stack.pop() // 大于当前值从栈内删除，得到索引
            res[last] = i - last
        }
        stack.push(i)
    }
    return res
}