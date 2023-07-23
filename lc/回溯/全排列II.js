function solution(nums = [1, 1, 2]) {
    nums.sort((a, b) => a - b)
    const res = []
    const used = {}
    const backTracking = (temp) => {
        if (temp.length >= nums.length) {
            res.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1] /* false 说明它前一个元素已经用过了 */ || used[i]) continue
            temp.push(nums[i])
            used[i] = true
            backTracking(temp)
            temp.pop()
            used[i] = false
        }
    }
    backTracking([])
    return res
}