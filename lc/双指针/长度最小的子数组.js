/**
 * 
 * @param {*} s 
 * @param {*} nums 
 * @description 满足其和 ≥ target 的长度最小的 连续子数组。endIndex从头到尾循环，startIndex在超出s时开始向前++
 * @returns 
 */
function solution(s = 7, nums = [2, 3, 1, 2, 4, 3]) {
    let endIndex = 0,
        startIndex = 0,
        sum = 0,
        res = Infinity
    while (endIndex < nums.length) {
        sum += nums[endIndex]
        while (sum >= s) {
            res = Math.min(res, endIndex - startIndex + 1)
            sum -= nums[startIndex]
            startIndex++
        }
        endIndex++
    }
    return res === Infinity ? 0 : res
}