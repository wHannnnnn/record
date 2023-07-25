function solution(nums = [5, 7, 7, 8, 8, 10], target = 8) {
    const findLIndex = () => {
        let l = 0,
            r = nums.length - 1
        while (l <= r) {
            const mid = Math.floor((l + r) / 2)
            if (nums[mid] >= target) { // 大于等于目标值，继续查找中间值左侧，值一定小于nums.length
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return r + 1
    }
    const findRIndex = () => {
        let l = 0,
            r = nums.length - 1
        while (l <= r) {
            const mid = Math.floor((l + r) / 2)
            if (nums[mid] <= target) { // 小于等于目标值，继续查找中间值右侧，值一定大于等于0，可能会等于nums.length
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return l - 1
    }
    const l = findLIndex()
    const r = findRIndex()
    if (r - l < 0) return [-1, -1]
    return [l, r]
}
const findLIndex = () => {
    let l = 0,
        r = nums.length - 1,
        v = -1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] >= target) { // 大于等于目标值，继续查找中间值左侧
            if (nums[mid] === target) v = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return v
}
const findRIndex = () => {
    let l = 0,
        r = nums.length - 1,
        v = -1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] <= target) { // 小于等于目标值，继续查找中间值右侧，, 值一定大于等于0
            if (nums[mid] === target) v = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return v
}