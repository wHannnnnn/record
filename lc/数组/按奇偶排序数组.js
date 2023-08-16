function solution(nums = [1, 3, 5, 2, 4, 6]) {
    let index1 = 0,
        index2 = 1,
        res = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res[index1] = nums[i]
            index1 += 2
        } else {
            res[index2] = nums[i]
            index2 += 2
        }
    }
    return res
}