function solution(nums1, nums2, nums3, nums4) {
    const map = new Map()
    const res = 0
    for (const item1 of nums1) {
        for (const item2 of nums2) {
            const sum = item1 + item2
            map.set(sum, (map.get(sum) || 0) + 1)
        }
    }
    for (const item3 of nums3) {
        for (const item4 of nums4) {
            const sum = item3 + item4
            const val = map.get(0 - sum)
            if (val) res += val
        }
    }
    return res
}