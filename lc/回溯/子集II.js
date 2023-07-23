function solution(nums = [1, 2, 2, 3]) {
    nums.sort((a, b) => a - b)
    const res = []
    const backTracking = (start, temp) => {
        res.push([...temp])
        if (start >= nums.length) return
        for (let i = start; i < nums.length; i++) {
            if (i !== start && nums[i] === nums[i - 1]) continue
            temp.push(nums[i])
            backTracking(i + 1, temp)
            temp.pop()
        }
    }
    backTracking(0, [])
    return res
}