/**
 * @description 假设你总是可以到达数组的最后一个位置。用最少的跳跃次数到达数组的最后一个位置。
 * 设置一个当前覆盖范围和最大覆盖范围，只要i === 当前覆盖范围，则当前覆盖范围 = 最大覆盖范围，step++。最大覆盖范围 > length - 1，则说明走完。
 * 不需要考虑具体怎么走，只需要考虑每步的最大范围，可以覆盖到终点即可
 */
function solution(nums = [2, 3, 1, 1, 4]) {
    let length = 0
    let max_length = 0
    let step = 0
    for (let i = 0; i < nums.length; i++) {
        max_length = Math.max(max_length, nums[i] + i)
        if (length === i) {
            length = max_length
            step++
            if (max_length === nums.length - 1) break
        }
    }
    return step
}