function p(num = 6) {
    const temp = [0, 1, 2]
    for (let i = 3; i <= num; i++) {
        [temp[1], temp[2]] = [temp[2], temp[1] + temp[[2]]]
    }
    return temp[2]
}
// 最少花费
function p1(nums = [1, 10, 1, 10, 1, 1, 10, 1, 10]) {
    const temp = [0, 0]
    for (let i = 2; i <= nums.length; i++) {
        // temp[i] = Math.min(temp[i - 1] + nums[i - 1], temp[i - 2] + nums[i - 2])
        [temp[0], temp[1]] = [temp[1], Math.min(temp[1] + nums[i - 1], temp[0] + nums[i - 2])]
    }
    // return temp[nums.length]
    return temp[1]
}