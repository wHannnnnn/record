function solution(nums = [1, 3, 5, 4, 7]) {
    const dp = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) dp[i] = dp[i - 1] + 1
    }
    return Math.max(...dp)
}

function solution(nums = [1, 3, 5, 4, 7]) {
    let max = 1
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) count += 1
        else count = 1
        max = Math.max(max, count)
    }
    return max
}