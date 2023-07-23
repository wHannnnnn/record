/**
 * @param {Array[0]: 身高, Array[1]: 前面比他高的人数} nums
 * @description 先按照身高从高到低排列，再循环根据前面比他高的人数(Array[i][1])插入，身高矮的人插入后不会影响到已插入的身高高的人
 */
function solution(nums = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
]) {
    nums.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1])
    const res = []
    for (let i = 0; i < nums.length; i++) {
        res.splice(nums[i][1], 0, nums[i])
    }
    return res
}