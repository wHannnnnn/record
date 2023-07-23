/**
 * @name 打家劫舍2
 * @param {*} nums 金额
 * @dp dp[0] = 0
 * @description 禁止连续，首尾相连，去掉首尾定义两个数组
 * @return dp[nums.length]
 */
// function fn(nums = [1, 2, 3, 1]) {
//     const list_left = nums.slice(1, arr,length)
//     const dp_left = [list_left[0], Math.max(list_left[0], list_left[1])]
//     for (let i = 2; i <= list_left.length; i++) {
//       dp_left[i] = Math.max(dp_left[i - 1], dp_left[i - 2] + list_left[i])
//     }
//     const list_right = nums.slice(0, nums.length - 1)
//     const dp_right = [list_right[0], Math.max(list_right[0], list_right[1])]
//     for (let i = 2; i <= list_right.length; i++) {
//         dp_right[i] = Math.max(dp_right[i - 1], dp_right[i - 2] + list_right[i])
//     }
//     return Math.max(dp_left[list_left.length - 1], dp_right[list_right.length - 1])
// }
function fn(nums = [1, 2, 3, 1]) {
    const res1 = fn1(0, nums.length - 1, nums)
    const res2 = fn1(1, nums.length, nums)
    return Math.max(res1, res2)
}

function fn1(start, end, list) {
    const dp = []
    dp[start] = list[start]
    dp[start + 1] = Math.max(list[start], list[start + 1])
    for (let i = start + 2; i < end; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + list[i])
    }
    return dp[end - 1]
}