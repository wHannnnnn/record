/**
 * @name 最长递增子序列
 * @param {*} nums 整数数组
 * @dp dp[i] nums索引作为上限
 * @description j循环，当前nums[i]跟nums[j]比较，大于则比较max(dp[i], dp[j] + 1)，dp[j]作为被比较值的对应索引上限的序列个数，dp[i] = 当前上限最大值
 * @return Math.max(dp[i], res) 取每轮循环对应上限dp[i]的最大值
 */
function solution(nums = [0, 1, 0, 3, 2, 3]) {
    const dp = new Array(nums.length).fill(1)
        // dp[0] 永远=1
    let res = 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i] /* 当前最大值 */ , dp[j] + 1 /* 比当前值小对应的最大值 + 1 */ ) // dp[3] = dp[1] + 1   dp[1] = 2
            }
        }
        res = Math.max(dp[i], res)
    }
    return res
}



/* 二分查找 */
function solution(nums = [0, 1, 0, 3, 2, 3]) {
    const arr = [nums[0]]
    let size = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[size]) {
            arr[++size] = nums[i]
        } else {
            let left = 0
            let right = size
            while (left < right) {
                const mid = Math.floor((right + left) / 2)
                if (nums[mid] < nums[i]) left = mid + 1 // 中间值小于当前值，目标在右边
                else right = mid
            }
            arr[left] = nums[i]
        }
    }
    return arr.length
}