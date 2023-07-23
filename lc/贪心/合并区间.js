/**
 * @param nums
 * @description 定义初始区间prev，如果有重合，初始区间[1]max（右区间取最大，相当于合并右区间），没有重合push(prev)然后重置当前区间为prev
 */
function solution(nums = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]) {
    nums.sort((a, b) => a[0] - b[0])
    let prev = nums[0]
    const res = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i][0] <= prev[1]) {
            prev[1] = Math.max(prev[1], nums[i][1])
        } else {
            res.push(prev)
            prev = nums[i]
        }
    }
    res.push(prev)
    return res
}