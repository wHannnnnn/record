/**
 * @name 摆动序列
 * @description 取得局部峰值，从而得到整体最优。峰值即左侧大于等于0，右侧小于0或者左侧小于等于0右侧大于0
 */
function solution(nums = [1, 7, 4, 9, 2, 5]) {
    if (nums.length < 2) return nums.length
    let pre = nums[1] - nums[0]
    let res = pre === 0 ? 1 : 2
    for (let i = 2; i < nums.length; i++) {
        const cur = nums[i] - nums[i - 1]
        if (pre >= 0 && cur < 0 || pre <= 0 && cyr > 0) {
            res++
            pre = cur
        }
    }
    return res
}