/**
 * @name 最长重复子数组
 * @param {*} nums1
 * @param {*} nums2
 * @dp 一维数组 dp[j] j = nums2长度，每轮循环比较nums1[i] === num2[j]，相同则找上一个的值 + 1
 * @description dp:init:  [0, 0,  0,  0,  0]，倒循环
 * @return max
 */
function findLength(nums1 = [1, 2, 3, 2, 1, 2, 1, 3], nums2 = [3, 2, 1, 4, 7]) {
    const dp = new Array(nums2.length + 1).fill(0)
    let max = 0
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = nums2.length; j > 0; j--) {
            if (nums1[i - 1] === nums2[j - 1]) dp[j] = dp[j - 1] + 1 // 循环不能有0 0-1为负数，循环整体长度加1，取-1的值，同时dp的长度也加1
            else dp[j] = 0 // 不重置非连续的值会在连续的值基础上+1
            max = Math.max(max, dp[j])
        }
    }
    return max
}