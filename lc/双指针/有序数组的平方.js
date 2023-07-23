/**
 * 
 * @param {number[]} nums 
 * @description 有序数组，两边平方比中间大，指针由外到内，每次找到平方的最大值，放到对应位置
 * @returns 
 */
function solution(nums = [-7, -5, -3, -2, 0, 1, 4, 6]) {
    let startIndex = 0
    let endIndex = nums.length - 1
    let index = nums.length - 1
    const res = new Array(nums.length)
    while (startIndex <= endIndex) {
        const endVal = nums[endIndex] * nums[endIndex]
        const startVal = nums[startIndex] * nums[startIndex]
        if (endVal > startVal) {
            res[index--] = endVal
            endIndex--
        } else {
            res[index--] = startVal
            startIndex++
        }
    }
    return res
}